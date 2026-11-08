"use client";

import styles from "@/app/signup/signup.module.css";
import Success from "@/components/signup/Success";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  GraduationCap,
  type LucideIcon,
  Mail,
  Phone,
  Sparkles,
  Tag,
  User,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  type FieldError,
  type UseFormRegister,
  useForm,
  useWatch,
} from "react-hook-form";
import { z } from "zod";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_URL || "";

const VALIDATION_MESSAGES = {
  first_name: {
    min: "First name must be at least 2 characters",
    pattern: "First name must contain only letters",
  },
  last_name: {
    min: "Last name must be at least 1 characters",
    pattern: "Last name must contain only letters",
  },
  dob: "Date of birth must be in the past",
  gender: "Please select your gender",
  role: "Please select your role",
  phone: {
    min: "Phone number must be at least 10 digits",
    pattern: "Phone number must contain only digits",
  },
  email: "Please enter a valid email address",
};

const signupSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: VALIDATION_MESSAGES.first_name.min })
    .regex(/^[A-Za-z\s]+$/, {
      message: VALIDATION_MESSAGES.first_name.pattern,
    }),
  last_name: z
    .string()
    .min(1, { message: VALIDATION_MESSAGES.last_name.min })
    .regex(/^[A-Za-z\s]+$/, { message: VALIDATION_MESSAGES.last_name.pattern }),
  dob: z
    .string()
    .min(1, { message: "Please select your date of birth" })
    .refine(
      (date) => {
        const parsed = new Date(date);
        return !Number.isNaN(parsed.getTime()) && parsed < new Date();
      },
      {
        message: VALIDATION_MESSAGES.dob,
      },
    ),
  gender: z.enum(["male", "female"], {
    message: VALIDATION_MESSAGES.gender,
  }),
  role: z.enum(["student", "professional"], {
    message: VALIDATION_MESSAGES.role,
  }),
  phone_number: z
    .string()
    .min(10, { message: VALIDATION_MESSAGES.phone.min })
    .regex(/^\d+$/, { message: VALIDATION_MESSAGES.phone.pattern }),
  email: z.string().email({ message: VALIDATION_MESSAGES.email }),
  referral_code: z.string().optional(),
});

type SignupFormData = z.infer<typeof signupSchema>;

const ERROR_MESSAGES = {
  default:
    "We're having trouble processing your registration. Please try again.",
  badRequest: "Please check your information and try again.",
  conflict:
    "An account with this email already exists. Please use a different email.",
  validation:
    "Some of your information is invalid. Please review highlighted fields.",
  serverError:
    "Our servers are temporarily unavailable. Please try again in a few minutes.",
  networkError: "Please check your internet connection and try again.",
};

const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  CONFLICT: 409,
  VALIDATION_ERROR: 422,
  SERVER_ERROR: 500,
};

const ROLE_OPTIONS = [
  {
    id: "student",
    title: "Student",
    desc: "Learning, building skills & joining community projects",
    icon: GraduationCap,
  },
  {
    id: "professional",
    title: "Professional",
    desc: "Tech professional, product builder & startup innovator",
    icon: Briefcase,
  },
];

const GENDER_OPTIONS = [
  { id: "male", label: "Male", icon: User },
  { id: "female", label: "Female", icon: UserCheck },
];

interface FormFieldProps {
  id: keyof SignupFormData;
  type?: string;
  label: string;
  placeholder?: string;
  icon?: LucideIcon;
  register: UseFormRegister<SignupFormData>;
  error?: FieldError;
}

function FormField({
  id,
  type = "text",
  label,
  placeholder,
  icon: Icon,
  register,
  error,
}: FormFieldProps) {
  return (
    <div className={styles.formGroup}>
      <Label
        htmlFor={id}
        className="text-xs font-semibold text-[#d4d4d8] mb-1.5 flex items-center gap-1.5"
      >
        {label}
      </Label>
      <div className="relative">
        {Icon && (
          <Icon className="w-4 h-4 text-[#71717a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none transition-colors" />
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          style={type === "date" ? { colorScheme: "dark" } : undefined}
          onClick={(e) => {
            if (type === "date" && "showPicker" in e.currentTarget) {
              try {
                (e.currentTarget as HTMLInputElement).showPicker();
              } catch {}
            }
          }}
          className={`w-full ${Icon ? "pl-10" : "px-3.5"} pr-3.5 py-2.5 rounded-xl bg-[#141414] border border-[#262626] text-white text-sm placeholder-[#52525b] outline-none transition-all focus:border-[#caff33] focus:shadow-[0_0_12px_rgba(202,255,51,0.2)] ${
            error ? "border-[#f87171] focus:border-[#f87171]" : ""
          }`}
          {...register(id)}
        />
      </div>
      {error && (
        <p className="text-[11px] text-[#f87171] mt-1">{error.message}</p>
      )}
    </div>
  );
}

function extractReferralCode(pathname: string): string {
  const pathParts = pathname.split("/");
  return pathParts.length > 2 && pathParts[2] ? pathParts[2] : "";
}

function getErrorMessage(status?: number): string {
  if (status === HTTP_STATUS.BAD_REQUEST) return ERROR_MESSAGES.badRequest;
  if (status === HTTP_STATUS.CONFLICT) return ERROR_MESSAGES.conflict;
  if (status === HTTP_STATUS.VALIDATION_ERROR) return ERROR_MESSAGES.validation;
  if (status && status >= HTTP_STATUS.SERVER_ERROR)
    return ERROR_MESSAGES.serverError;
  return ERROR_MESSAGES.default;
}

export interface RegistrationFormProps {
  initialReferralCode?: string;
}

export function RegistrationForm({
  initialReferralCode = "",
}: RegistrationFormProps) {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitError: "",
    submitSuccess: false,
  });
  const [referralCode, setReferralCode] = useState(initialReferralCode);

  const pathname = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    control,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      referral_code: referralCode,
      gender: "male",
      role: "student",
    },
  });

  const selectedRole = useWatch({ control, name: "role" });
  const selectedGender = useWatch({ control, name: "gender" });

  useEffect(() => {
    if (!initialReferralCode && pathname) {
      const extractedCode = extractReferralCode(pathname);
      if (extractedCode) {
        setReferralCode(extractedCode);
      }
    }
  }, [pathname, initialReferralCode]);

  useEffect(() => {
    if (referralCode) {
      reset((prevValues) => ({ ...prevValues, referral_code: referralCode }));
    }
  }, [referralCode, reset]);

  const onSubmit = async (data: SignupFormData) => {
    setFormState({ isSubmitting: true, submitError: "", submitSuccess: false });

    try {
      const formData = { ...data, referral_code: referralCode };
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok || response.status === HTTP_STATUS.CREATED) {
        setFormState({
          isSubmitting: false,
          submitError: "",
          submitSuccess: true,
        });
        reset();
      } else {
        const errorText = getErrorMessage(response.status);
        setFormState({
          isSubmitting: false,
          submitError: errorText,
          submitSuccess: false,
        });
      }
    } catch {
      setFormState({
        isSubmitting: false,
        submitError: ERROR_MESSAGES.networkError,
        submitSuccess: false,
      });
    }
  };

  return (
    <div className={`${styles.morphBg} py-12 px-4`}>
      <div className={styles.container}>
        <div className={`${styles.floatingOrb} ${styles.topRightOrb}`} />
        <div className={`${styles.floatingOrb} ${styles.bottomLeftOrb}`} />
      </div>

      <div className="container mx-auto px-4 flex flex-col justify-center items-center relative z-10 my-auto">
        {/* Top Back Navigation Bar */}
        <div className="w-full max-w-2xl flex items-center justify-between mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#a1a1aa] hover:text-white transition-colors bg-[#1c1c1c] border border-[#262626] px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/LogoShort.png"
              alt="BuilderClan Logo"
              width={450}
              height={266}
              className="w-7 h-auto"
            />
            <span className="text-sm font-bold text-white tracking-tight group-hover:text-[#caff33] transition-colors">
              BuilderClan
            </span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={styles.glassEffect}
        >
          <div className={styles.gradientOverlay} />

          {formState.submitSuccess ? (
            <Success />
          ) : (
            <div>
              {/* Header Title */}
              <div className="text-center mb-8">
                {referralCode ? (
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#caff33]/10 border border-[#caff33]/30 text-xs font-semibold text-[#caff33] mb-4 shadow-sm">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Referral Code: {referralCode}</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1c1c] border border-[#262626] text-xs font-medium text-[#caff33] mb-4 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>JOIN BUILDERCLAN</span>
                  </div>
                )}

                <h1 className={styles.title}>Create Your Account</h1>
                <p className={styles.subtitle}>
                  Join our global tech community &amp; collaborate on open
                  source, products, and startups
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                {referralCode && (
                  <input
                    type="hidden"
                    {...register("referral_code")}
                    value={referralCode}
                  />
                )}

                {/* Name Fields */}
                <div className={styles.formRow}>
                  <FormField
                    id="first_name"
                    label="First Name"
                    placeholder="John"
                    icon={User}
                    register={register}
                    error={errors.first_name}
                  />

                  <FormField
                    id="last_name"
                    label="Last Name"
                    placeholder="Doe"
                    icon={User}
                    register={register}
                    error={errors.last_name}
                  />
                </div>

                {/* Contact Fields */}
                <div className={styles.formRow}>
                  <FormField
                    id="email"
                    type="email"
                    label="Email Address"
                    placeholder="john@example.com"
                    icon={Mail}
                    register={register}
                    error={errors.email}
                  />

                  <FormField
                    id="phone_number"
                    type="tel"
                    label="Mobile Number"
                    placeholder="+91 **********"
                    icon={Phone}
                    register={register}
                    error={errors.phone_number}
                  />
                </div>

                {/* Date of Birth & Gender */}
                <div className={styles.formRow}>
                  <FormField
                    id="dob"
                    type="date"
                    label="Date of Birth"
                    icon={Calendar}
                    register={register}
                    error={errors.dob}
                  />

                  <div className={styles.formGroup}>
                    <Label className="text-xs font-semibold text-[#d4d4d8] mb-1.5 block">
                      Gender
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      {GENDER_OPTIONS.map((g) => {
                        const isSelected = selectedGender === g.id;
                        return (
                          <button
                            key={g.id}
                            type="button"
                            onClick={() =>
                              setValue("gender", g.id as "male" | "female", {
                                shouldValidate: true,
                              })
                            }
                            className={`py-2.5 px-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                              isSelected
                                ? "bg-[#caff33] text-[#1c1c1c] border-[#caff33] shadow-sm"
                                : "bg-[#141414] text-[#a1a1aa] border-[#262626] hover:border-[#383838]"
                            }`}
                          >
                            <g.icon className="w-3.5 h-3.5" />
                            <span>{g.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.gender && (
                      <p className="text-[11px] text-[#f87171] mt-1">
                        {errors.gender.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Role Selection Cards (Student & Professional) */}
                <div className={styles.formGroup}>
                  <Label className="text-xs font-semibold text-[#d4d4d8] mb-1.5 block">
                    Select Your Role
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ROLE_OPTIONS.map((role) => {
                      const isSelected = selectedRole === role.id;
                      const Icon = role.icon;
                      return (
                        <button
                          key={role.id}
                          type="button"
                          onClick={() =>
                            setValue(
                              "role",
                              role.id as "student" | "professional",
                              { shouldValidate: true },
                            )
                          }
                          className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                            isSelected
                              ? "bg-[#1c1c1c] border-[#caff33] shadow-[0_0_12px_rgba(202,255,51,0.2)]"
                              : "bg-[#141414] border-[#262626] hover:border-[#383838]"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div
                              className={`p-2.5 rounded-xl ${
                                isSelected
                                  ? "bg-[#caff33] text-[#1c1c1c]"
                                  : "bg-[#222222] text-[#a1a1aa]"
                              }`}
                            >
                              <Icon className="w-4.5 h-4.5" />
                            </div>
                          </div>
                          <div>
                            <div
                              className={`text-sm font-bold ${
                                isSelected ? "text-[#caff33]" : "text-white"
                              }`}
                            >
                              {role.title}
                            </div>
                            <div className="text-xs text-[#71717a] mt-1 leading-normal">
                              {role.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {errors.role && (
                    <p className="text-[11px] text-[#f87171] mt-1">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                {formState.submitError && (
                  <div className={styles.errorAlert}>
                    <strong>Registration Failed:</strong>{" "}
                    {formState.submitError}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`${styles.button} inline-flex items-center justify-center gap-2`}
                  disabled={formState.isSubmitting}
                >
                  <span>
                    {formState.isSubmitting
                      ? "Creating your account..."
                      : "Join BuilderClan Community"}
                  </span>
                  {!formState.isSubmitting && (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
