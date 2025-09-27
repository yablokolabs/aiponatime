import SignUp from "@/components/Auth/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Property",
};

const SignupPage = () => {
  return <SignUp />;
};

export default SignupPage;
