"use client";
import Loader from "@/components/Common/Loader";
import Logo from "@/components/Layout/Header/Logo";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";

interface SigninProps {
  onSwitchToSignUp?: () => void;
}

const Signin = ({ onSwitchToSignUp }: SigninProps = {}) => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    checkboxToggle: false,
  });
  const [loading, setLoading] = useState(false);

  const loginUser = (e: any) => {
    e.preventDefault();

    setLoading(true);

    // Demo authentication - replace with real NextAuth setup
    if (loginData.email && loginData.password) {
      // Simulate API call
      setTimeout(() => {
        toast.success("Login successful! Welcome back!");
        setLoading(false);

        // Close modal if it's being used in header
        if (onSwitchToSignUp) {
          // This indicates we're in a modal, so we should close it
          window.location.reload(); // Simple way to "login" for demo
        } else {
          router.push("/");
        }
      }, 1000);
    } else {
      setLoading(false);
      toast.error("Please enter both email and password");
    }

    // Uncomment below for real NextAuth integration:
    /*
    signIn("credentials", { ...loginData, redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback?.error);
          console.log(callback?.error);
          setLoading(false);
          return;
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Login successful");
          setLoading(false);
          router.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
    */
  };

  return (
    <>
      <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border/60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border/60 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-white">
          OR
        </span>
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-[22px]">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            className="w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            className="w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="bg-primary w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent"
          >
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary"
      >
        Forgot Password?
      </Link>
      <p className="text-body-secondary text-white text-base">
        Not a member yet? {onSwitchToSignUp
          ? (
            <button
              onClick={onSwitchToSignUp}
              className="text-primary hover:underline"
            >
              Sign Up
            </button>
          )
          : (
            <Link href="/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          )}
      </p>
    </>
  );
};

export default Signin;
