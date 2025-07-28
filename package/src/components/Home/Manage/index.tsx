"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { PaymentButton, PlanName } from "@/components/Home/PaymentButton";

type Plan = {
  heading: PlanName;
  price: {
    monthly: number;
    yearly: number;
  };
  user: string;
  features: {
    books: string;
    format: string;
    personalization: string;
    support: string;
    extras?: string;
  };
};

const plans: Plan[] = [
  {
    heading: "Story Starter",
    price: {
      monthly: 39,
      yearly: 351,
    },
    user: "per month",
    features: {
      books: "2 Personalized Storybooks / Month",
      format: "Digital PDF Delivery",
      personalization: "Child's Name & Interests",
      support: "Email Support",
    },
  },
  {
    heading: "Story Explorer",
    price: {
      monthly: 59,
      yearly: 531,
    },
    user: "per month",
    features: {
      books: "2 Personalized Storybooks / Month",
      format: "Hardcover & Digital PDF",
      personalization: "Name, Interests & Photos",
      support: "Email & Chat Support",
      extras: "Collector Sticker Set",
    },
  },
  {
    heading: "Story Legend",
    price: {
      monthly: 89,
      yearly: 801,
    },
    user: "per month",
    features: {
      books: "4 Personalized Stories / Month",
      format: "Hardcover + eBook",
      personalization: "Full Custom Illustrations",
      extras: "Gift Wrapping & Dedication Page",
      support: "Priority Support",
    },
  },
];

const Manage = () => {
  const [enabled, setEnabled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"yearly" | "monthly">("yearly");

  const toggleEnabled = () => {
    // Toggle the enabled state
    setEnabled((prevEnabled) => !prevEnabled);

    // Update selected category based on the switch position
    setSelectedCategory((prevCategory) => (prevCategory === "yearly" ? "monthly" : "yearly"));
  };

  const filteredData = plans.map((plan) => ({
    ...plan,
    price: plan.price[selectedCategory], // Use the selectedCategory to show either monthly or yearly
  }));

  return (
    <section id="services-section dark:bg-darkmode">
      <div id="pricing" className="mx-auto max-w-7xl">
        <h3 className="text-center text-4xl sm:text-5xl md:text-6xl font-black px-4 sm:px-8 md:mx-12 lg:mx-24">
          Create Personalized Stories for Your Child.
        </h3>

        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/manage/right.svg`} alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Your First Adventure Starts Today</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/manage/right.svg`} alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Personalized Stories Every Month</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/manage/right.svg`} alt="right-icon" width={21} height={14} />
            <h4 className="text-18 font-semibold">Cancel Anytime, No Questions Asked</h4>
          </div>
        </div>

        <div className="mt-6 relative text-center">
          <div className="dance-text sm:-ml-80 text-center sm:-rotate-[10deg] mb-5">get 3 months free</div>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/manage/toggle.svg`} alt="toggle-image" width={24} height={24} className="absolute left-[37%] top-8" />
          <div className="flex justify-center items-center gap-4">
            <h3 className="text-14 font-medium">Billed Yearly</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-black"
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${enabled ? "translate-x-6" : "translate-x-1"}`}
              />
            </Switch>
            <h3 className="text-14 font-medium">Billed Monthly</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-14 manage justify-items-center">
          {filteredData.map((items, i) => (
            <div className="shadow-manage-shadow border border-border text-center p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary transform hover:scale-[1.02] rounded-lg w-full max-w-sm" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-6xl font-extrabold mb-3">${items.price}</h2>
              <p className="text-14 font-medium text-darkgrey mb-10">{selectedCategory === "yearly" ? "per year" : "per month"}</p>
              {/* Map through the features object and render each key-value pair dynamically */}
              {Object.entries(items.features).map(([key, value]) => (
                <h3 className="text-sm font-medium text-darkgrey mb-3" key={key}>
                  {value}
                </h3>
              ))}
              <div className="mt-6">
                <PaymentButton 
                  planName={items.heading} 
                  billingPeriod={selectedCategory}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manage;
