"use client";

import { RegistrationForm } from "@/components/signup/RegistrationForm";
import { useParams } from "next/navigation";

export default function Signup() {
  const params = useParams();
  const referralCode =
    typeof params?.referralCode === "string" ? params.referralCode : "";

  return <RegistrationForm initialReferralCode={referralCode} />;
}
