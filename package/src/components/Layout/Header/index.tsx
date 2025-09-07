"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
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
            {/* Sign In Button with Elegant Animations - HIDDEN */}
            {/* <div className="hidden lg:block relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300 group-hover:duration-200 animate-pulse"></div>
              
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_2s_ease-in-out_infinite]" style={{animationDelay: '0.2s'}}></div>
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_2s_ease-in-out_infinite]" style={{animationDelay: '0.8s'}}></div>
              <div className="absolute top-0 left-1/2 w-1 h-1 bg-purple-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_2s_ease-in-out_infinite]" style={{animationDelay: '1.2s'}}></div>
              
              <button
                className='relative bg-white/90 backdrop-blur-sm text-gray-700 text-lg font-semibold py-3 px-6 rounded-full border border-purple-200 hover:text-purple-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-200/50 hover:border-purple-300'
                onClick={() => {
                  setIsSignInOpen(true);
                }}>
                <span className="relative z-10 flex items-center gap-2">
                  Sign In
                  <span className="text-purple-500 group-hover:animate-bounce transition-transform duration-300">✨</span>
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/10 via-pink-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            
            <div className="hidden lg:block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200 group-hover:duration-200 group-hover:animate-[magicGlow_2s_ease-in-out_infinite]"></div>
              
              <div className="absolute -top-2 left-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1.5s_ease-in-out_infinite]" style={{animationDelay: '0s'}}></div>
              <div className="absolute -right-2 top-1/2 w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1.8s_ease-in-out_infinite]" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-2 right-2 w-1 h-1 bg-pink-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_2.2s_ease-in-out_infinite]" style={{animationDelay: '1s'}}></div>
              <div className="absolute left-0 bottom-1 w-1.5 h-1.5 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-[sparkle_1.7s_ease-in-out_infinite]" style={{animationDelay: '1.3s'}}></div>
              
              <button
                className='relative bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 text-white text-lg font-semibold py-3 px-6 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 bg-[length:300%_auto] hover:animate-[gradientShine_2s_ease_infinite] overflow-hidden'
                onClick={() => {
                  setIsSignUpOpen(true);
                }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
                <span className="relative z-10 flex items-center gap-2">
                  Sign Up
                  <span className="group-hover:animate-spin transition-transform duration-500 text-yellow-200">🎭</span>
                </span>
              </button>
            </div> */}
            {/* Hamburger menu button for mobile */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-out ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-out ${navbarOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-out ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
              <MobileHeaderLink 
                key={index} 
                item={item} 
                onClose={() => setNavbarOpen(false)}
              />
            ))}

          </nav>
        </div>
      </div>
      
      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
          <div 
            ref={signInRef}
            className='relative bg-darkmode rounded-2xl w-full max-w-md overflow-hidden shadow-xl'>
            <div className='p-8'>
              <div className='relative flex justify-end mb-4'>
                <button 
                  onClick={() => setIsSignInOpen(false)}
                  className='text-gray-400 hover:text-white transition-colors'>
                  <Icon icon='material-symbols:close' className='w-6 h-6' />
                </button>
              </div>
              
              <Signin onSwitchToSignUp={() => {
                setIsSignInOpen(false);
                setIsSignUpOpen(true);
              }} />
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
          <div 
            ref={signUpRef}
            className='relative bg-darkmode rounded-2xl w-full max-w-md overflow-hidden shadow-xl'>
            <div className='p-8'>
              <div className='relative flex justify-end mb-4'>
                <button 
                  onClick={() => setIsSignUpOpen(false)}
                  className='text-gray-400 hover:text-white transition-colors'>
                  <Icon icon='material-symbols:close' className='w-6 h-6' />
                </button>
              </div>
              
              <SignUp onSwitchToSignIn={() => {
                setIsSignUpOpen(false);
                setIsSignInOpen(true);
              }} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
