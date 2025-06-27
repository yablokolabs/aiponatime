"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";

import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 border-b border-black/60 ${sticky ? " shadow-lg bg-white" : "shadow-none"
        }`}
    >
      <div className="lg:py-0 py-1">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex items-center justify-between px-3">
          <div className="pr-12 border-r border-black/60 duration-300 py-2">
            <Logo />
          </div>
          <nav className="hidden lg:flex grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-2 lg:gap-3 pl-4 border-l border-black/60 duration-300 py-2">
            <button
              className='hidden lg:block text-primary text-lg font-medium py-3 px-6 transition duration-300 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-primary hover:cursor-pointer rounded-md'
              onClick={() => {
                setIsSignInOpen(true);
              }}>
              Sign In
            </button>
            <button
              className='hidden lg:block text-white bg-primary border border-primary text-lg font-medium py-3 px-6 transition duration-300 ease-in-out rounded-md hover:bg-white hover:text-primary hover:cursor-pointer'
              onClick={() => {
                setIsSignUpOpen(true);
              }}>
              Sign Up
            </button>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"
            } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo />
            </h2>

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label="Close menu Modal"
            ></button>
          </div>
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className='mt-4 flex flex-col space-y-4 w-full'>
              <button
                className='bg-primary text-white px-4 py-2 rounded-lg border border-primary hover:text-primary hover:bg-transparent hover:cursor-pointer transition duration-300 ease-in-out w-full text-left pl-4'
                onClick={() => {
                  setIsSignInOpen(true);
                  setNavbarOpen(false);
                }}>
                Sign In
              </button>
              <button
                className='bg-transparent text-primary border border-primary px-4 py-2 rounded-lg w-full text-left pl-4 transition duration-300 ease-in-out hover:bg-primary hover:text-white hover:cursor-pointer'
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}>
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
          <div 
            ref={signInRef}
            className='relative bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl'>
            <div className='p-8 text-center'>
              <div className='relative flex items-center justify-center mb-8'>
                <div className='flex-1 flex justify-center'>
                  <Logo />
                </div>
                <button 
                  onClick={() => setIsSignInOpen(false)}
                  className='absolute right-0 text-gray-500 hover:text-gray-700 transition-colors'>
                  <Icon icon='material-symbols:close' className='w-6 h-6' />
                </button>
              </div>
              
              <div className='space-y-4'>
                <button className='w-full flex items-center justify-center gap-2 bg-blue-800 text-white px-4 py-3 rounded-lg hover:bg-blue-900 transition-colors'>
                  <Icon icon='flat-color-icons:google' className='w-5 h-5' />
                  <span>Sign In with Google</span>
                </button>
                
                <button className='w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors'>
                  <Icon icon='mdi:github' className='w-5 h-5' />
                  <span>Sign In with GitHub</span>
                </button>
                
                <div className='relative my-6'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-2 bg-white text-gray-500'>OR</span>
                  </div>
                </div>
                
                <div className='space-y-4 text-left'>
                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Enter your email'
                    />
                  </div>
                  
                  <div>
                    <div className='flex justify-between items-center mb-1'>
                      <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
                        Password
                      </label>
                      <a href='#' className='text-sm text-blue-600 hover:underline'>
                        Forgot password?
                      </a>
                    </div>
                    <input
                      type='password'
                      id='password'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Enter your password'
                    />
                  </div>
                  
                  <button className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                    Sign In
                  </button>
                </div>
                
                <p className='mt-4 text-sm text-gray-600'>
                  Not a member yet?{' '}
                  <button 
                    onClick={() => {
                      setIsSignInOpen(false);
                      setIsSignUpOpen(true);
                    }}
                    className='text-blue-600 font-medium hover:underline'>
                    Sign Up
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal - Similar structure but with signup form */}
      {isSignUpOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
          <div 
            ref={signUpRef}
            className='relative bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl'>
            <div className='p-8 text-center'>
              <div className='relative flex items-center justify-center mb-8'>
                <div className='flex-1 flex justify-center'>
                  <Logo />
                </div>
                <button 
                  onClick={() => setIsSignUpOpen(false)}
                  className='absolute right-0 text-gray-500 hover:text-gray-700 transition-colors'>
                  <Icon icon='material-symbols:close' className='w-6 h-6' />
                </button>
              </div>
              
              <div className='space-y-4'>
                <button className='w-full flex items-center justify-center gap-2 bg-blue-800 text-white px-4 py-3 rounded-lg hover:bg-blue-900 transition-colors'>
                  <Icon icon='flat-color-icons:google' className='w-5 h-5' />
                  <span>Sign Up with Google</span>
                </button>
                
                <button className='w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors'>
                  <Icon icon='mdi:github' className='w-5 h-5' />
                  <span>Sign Up with GitHub</span>
                </button>
                
                <div className='relative my-6'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-2 bg-white text-gray-500'>OR</span>
                  </div>
                </div>
                
                <div className='space-y-4 text-left'>
                  <div>
                    <label htmlFor='signup-email' className='block text-sm font-medium text-gray-700 mb-1'>
                      Email
                    </label>
                    <input
                      type='email'
                      id='signup-email'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Enter your email'
                    />
                  </div>
                  
                  <div>
                    <label htmlFor='signup-password' className='block text-sm font-medium text-gray-700 mb-1'>
                      Create Password
                    </label>
                    <input
                      type='password'
                      id='signup-password'
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Create a password'
                    />
                  </div>
                  
                  <button className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                    Create Account
                  </button>
                </div>
                
                <p className='mt-4 text-sm text-gray-600'>
                  Already have an account?{' '}
                  <button 
                    onClick={() => {
                      setIsSignUpOpen(false);
                      setIsSignInOpen(true);
                    }}
                    className='text-blue-600 font-medium hover:underline'>
                    Sign In
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
