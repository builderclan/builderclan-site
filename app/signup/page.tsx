import { RegistrationForm } from "@/components/signup/RegistrationForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join BuilderClan",
  description: "Join the BuilderClan developer community.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupPage() {
  return <RegistrationForm />;
}
