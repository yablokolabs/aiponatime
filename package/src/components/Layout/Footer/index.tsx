import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { ProductType } from "@/app/api/data";

const footer = () => {
  return (
    <div className="bg-black" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className='col-span-4'>
            <h3 className='text-white text-4xl font-bold leading-9 mb-4 lg:mb-10'>AIPonATime<sup className="text-sm">™</sup></h3>
            <p className='text-white/70 text-lg mb-6 max-w-xs'>Creating magical, personalized storybooks that inspire a love for reading in every child.</p>
            <div className='flex gap-4'>
              <Link href="https://facebook.com" className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/footer/vec.svg`} 
                  alt="Facebook" 
                  width={15} 
                  height={20} 
                />
              </Link>
              <Link href="https://twitter.com" className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/footer/twitter.svg`} 
                  alt="Twitter" 
                  width={20} 
                  height={20} 
                />
              </Link>
              <Link href="https://instagram.com" className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/footer/instagram.svg`} 
                  alt="Instagram" 
                  width={20} 
                  height={20} 
                />
              </Link>
              <Link href="https://pinterest.com" className="footer-icons hover:bg-primary transition-colors duration-200 p-2 rounded-full">
                <Image 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/footer/pinterest.svg`} 
                  alt="Pinterest" 
                  width={20} 
                  height={20} 
                />
              </Link>
            </div>
          </div>
          {/* CLOUMN-2/3 */}
          {ProductType.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-white text-lg font-normal mb-6 space-links">{link}</Link>
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
                  Yabloko Labs Pvt. Ltd.
                </a>
                . All rights reserved.
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-white pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-white pl-6 border-solid border-l border-footer">Terms & conditions</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer;