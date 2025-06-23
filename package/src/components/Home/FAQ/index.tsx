"use client"
import React from "react";
import { Icon } from "@iconify/react";
import { Disclosure } from "@headlessui/react";

const FAQ = () => {
  return (
    <section className="relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div id="faq" className="relative rounded-2xl py-24 bg-faqBg bg-no-repeat bg-cover bg-primary">
          <p className="text-lg font-normal text-white text-center mb-6">FAQ</p>
          <h2 className="text-6xl font-semibold text-center text-white mx-72">
            Frequently asked questions.
          </h2>
          <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="flex w-full justify-between items-center text-left text-2xl font-medium focus:outline-hidden ">
                      <span className="text-black">How does AIPonATime<sup className="text-sm">™</sup> personalize my child's storybook?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-16 text-black/50 font-normal text-left pt-4 mt-6 border-t border-border">
                      <div className="lg:max-w-70%">
                        We ask for your child's name, age, and interests. Our AI then crafts a unique storyline and custom illustrations that place your child at the heart of the adventure.
                      </div>
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            </div>
            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white mb-5">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden">
                      <span className="text-black">What formats will I receive?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-base text-black/50 pt-4 mt-6 text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        Every subscription includes a high-resolution PDF delivered instantly. The Explorer and Legend plans also ship a premium hardcover to your doorstep.
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            <div className="mx-auto w-full max-w-5xl rounded-2xl p-8 bg-white">
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-lg text-left text-2xl font-medium focus:outline-hidden">
                      <span className="text-black">How long will it take to receive the book?</span>
                      <div
                        className={`h-5 w-5 transform transition-transform duration-300 ${open ? "rotate-180" : ""
                          }`}
                      >
                        <Icon icon="lucide:chevron-up" width="20" height="20" />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-base text-black/50 pt-4 mt-6 font-normal text-left border-t border-border">
                      <div className="lg:max-w-70%">
                        Digital PDFs are ready right after purchase. Printed books are produced in 5-7 business days and shipped worldwide; delivery times vary by location.
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;