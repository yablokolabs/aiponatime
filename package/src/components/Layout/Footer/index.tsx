"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ProductType } from "@/app/api/data";
import { useState } from "react";
import PrivacyModal from "@/components/Common/PrivacyModal";
import TermsModal from "@/components/Common/TermsModal";
import RefundModal from "@/components/Common/RefundModal";

// Helper function to convert link text to anchor links
const getLinkHref = (linkText: string): string => {
  // Policy links are handled by modals, return '#' to prevent page jump
  if (['Privacy Policy', 'Terms of Service', 'Refund Policy'].includes(linkText)) {
    return '#';
  }
  
  const linkMap: Record<string, string> = {
    'How It Works': '#how-it-works',
    'Our Story': '#about',
    'Testimonials': '#testimonials',
    'Pricing': '#pricing',
    'FAQs': '#faq',
    'Contact Us': '#contact'
  };
  return linkMap[linkText] || '#';
};

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  return (
    <div className="bg-black" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className='col-span-4'>
            <h3 className='text-white text-4xl font-bold leading-9 mb-4 lg:mb-10'>AIponATime<sup className="text-sm">™</sup></h3>
            <p className='text-white/70 text-lg mb-6 max-w-xs'>Creating magical, personalized storybooks that inspire a love for reading in every child.</p>
            <div className='flex gap-4'>
              <Link 
                href="https://www.linkedin.com/in/yabloko-labs-4858bb366/" 
                className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:linkedin" className="w-5 h-5 text-white" />
              </Link>
              <Link href="https://facebook.com" className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/footer/vec.svg`} 
                  alt="Facebook" 
                  width={15} 
                  height={20} 
                />
              </Link>
              <Link 
                href="https://github.com/map2map/aiponatime" 
                className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" className="w-5 h-5 text-white" />
              </Link>
              <Link href="https://www.instagram.com/aiponatime" className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/footer/instagram.svg`} 
                  alt="Instagram" 
                  width={20} 
                  height={20} 
                />
              </Link>
              <Link 
                href="https://www.youtube.com/@aiponatime" 
                className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:youtube" className="w-5 h-5 text-white" />
              </Link>
            </div>
            <div className="mt-4">
              <p className="text-white/70 text-lg">
                <Link 
                  href="mailto:sales@aiponatime.com" 
                  className="bg-primary/10 px-2 py-1 rounded text-primary hover:bg-primary/20 hover:text-white transition-all font-medium"
                  style={{ animation: 'attention-pulse 2s infinite' }}
                >
                  sales@aiponatime.com
                </Link>
              </p>
            </div>
          </div>
          {/* Quick Links */}
          <div className="group relative col-span-2">
            <p className="text-white text-xl font-extrabold mb-9">Quick Links</p>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-white/70 hover:text-white text-lg font-normal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-white/70 hover:text-white text-lg font-normal transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/70 hover:text-white text-lg font-normal transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white text-lg font-normal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Dynamic Links from ProductType */}
          {ProductType.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul className="space-y-4">
                {product.link.map((link: string, index: number) => (
                  <li key={index}>
                    {link === 'Privacy Policy' ? (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setIsPrivacyModalOpen(true);
                        }}
                        className="text-white/70 hover:text-white text-lg font-normal transition-colors text-left w-full"
                      >
                        {link}
                      </button>
                    ) : link === 'Terms of Service' ? (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setIsTermsModalOpen(true);
                        }}
                        className="text-white/70 hover:text-white text-lg font-normal transition-colors text-left w-full"
                      >
                        {link}
                      </button>
                    ) : link === 'Refund Policy' ? (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setIsRefundModalOpen(true);
                        }}
                        className="text-white/70 hover:text-white text-lg font-normal transition-colors text-left w-full"
                      >
                        {link}
                      </button>
                    ) : (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.href = getLinkHref(link);
                        }}
                        className="text-white/70 hover:text-white text-lg font-normal transition-colors text-left w-full"
                      >
                        {link}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className='text-center md:text-start text-white text-lg'>
                © {new Date().getFullYear()}{' '}
                <a href="https://yablokolabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Yabloko Labs Pvt. Ltd
                </a>
                . All rights reserved.
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsPrivacyModalOpen(true);
                }}
                className="text-white pr-6 hover:text-primary transition-colors text-lg font-normal"
              >
                Privacy policy
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsTermsModalOpen(true);
                }}
                className="text-white pl-6 border-solid border-l border-footer hover:text-primary transition-colors text-lg font-normal"
              >
                Terms & conditions
              </button>
              {/* <button 
                onClick={(e) => {
                  e.preventDefault();
                  setIsRefundModalOpen(true);
                }}
                className="text-white pl-6 border-solid border-l border-footer hover:text-primary transition-colors text-lg font-normal"
              >
                Refund policy
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* Analytics Scripts */}
      <Script 
        id="ahrefs-analytics"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="3xlVTfDg4PXpGfnliy5F6g"
        strategy="afterInteractive"
        async
      />
      <Script 
        id="cf-analytics"
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "9b7ada4ada9b4353a7f5a62cb133e34e"}'
        strategy="afterInteractive"
      />
      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={() => setIsTermsModalOpen(false)}
      />
      <RefundModal
        isOpen={isRefundModalOpen}
        onClose={() => setIsRefundModalOpen(false)}
      />
    </div>
  )
}

export default Footer;