"use client";
import { PaymentButton, PlanName } from "@/components/Home/PaymentButton";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Currency = "INR" | "USD";

// Conversion rate: 1 USD = 83.5 INR (you can update this with current rates or fetch from an API)
const USD_TO_INR_RATE = 83.5;

type Plan = {
  heading: PlanName;
  originalPrice: {
    usd: number;
    inr: number;
  };
  discountedPrice: {
    usd: number;
    inr: number;
  };
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
    originalPrice: {
      usd: 39,
      inr: 3380,
    },
    discountedPrice: {
      usd: 19.50,
      inr: 1690,
    },
    features: {
      books: "Personalized Storybook (One-Time)",
      format: "Digital PDF Delivery",
      personalization: "Child's Name & Interests",
      support: "Email Support",
    },
  },
  {
    heading: "Story Explorer",
    originalPrice: {
      usd: 59,
      inr: 5113,
    },
    discountedPrice: {
      usd: 29.50,
      inr: 2557,
    },
    features: {
      books: "Personalized Storybook (One-Time)",
      format: "Hardcover & Digital PDF",
      personalization: "Name, Interests & Photos",
      support: "Email & Chat Support",
      extras: "Collector Sticker Set",
    },
  },
  {
    heading: "Story Legend",
    originalPrice: {
      usd: 89,
      inr: 7712,
    },
    discountedPrice: {
      usd: 44.50,
      inr: 3856,
    },
    features: {
      books: "2 Personalized Stories (One-Time)",
      format: "Hardcover + eBook",
      personalization: "Full Custom Illustrations",
      extras: "Gift Wrapping & Dedication Page",
      support: "Priority Support",
    },
  },
];

const Manage = () => {
  const [currency, setCurrency] = useState<Currency>("USD"); // Default to USD
  const [isLoading, setIsLoading] = useState(true);

  // Detect user's country and set currency accordingly
  useEffect(() => {
    const detectUserCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        // If user is from India, set currency to INR, otherwise keep USD
        if (data.country === "IN") {
          setCurrency("INR");
        }
      } catch (error) {
        console.error("Error detecting user location:", error);
        // Default to USD if there's an error
        setCurrency("USD");
      } finally {
        setIsLoading(false);
      }
    };

    detectUserCountry();
  }, []);

  const toggleCurrency = () => {
    setCurrency(prev => prev === "INR" ? "USD" : "INR");
  };

  const formatPrice = (price: number): string => {
    return currency === "INR" ? `₹${price.toLocaleString()}` : `$${price.toFixed(2)}`;
  };

  const filteredData = plans.map((plan) => {
    const price = currency === "INR" ? plan.discountedPrice.inr : plan.discountedPrice.usd;
    const originalPrice = currency === "INR" ? plan.originalPrice.inr : plan.originalPrice.usd;
    return {
      ...plan,
      price,
      originalPrice,
      formattedPrice: formatPrice(price),
      formattedOriginalPrice: formatPrice(originalPrice),
    };
  });

  return (
    <section id="services-section dark:bg-darkmode">
      <div id="pricing" className="mx-auto max-w-7xl">
        <h3 className="text-center text-4xl sm:text-5xl md:text-6xl font-black px-4 sm:px-8 md:mx-12 lg:mx-24">
          Create Personalized Stories for Your Child.
        </h3>

        {/* Currency Toggle */}
        {!isLoading && (
          <div className="flex justify-center items-center mt-8 mb-12">
            <span className={`mx-2 font-medium ${currency === "INR" ? "text-primary" : "text-gray-500"}`}>INR</span>
            <Switch
              checked={currency === "USD"}
              onChange={toggleCurrency}
              className={`${
                currency === "USD" ? "bg-primary" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Toggle currency</span>
              <span
                className={`${
                  currency === "USD" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <span className={`mx-2 font-medium ${currency === "USD" ? "text-primary" : "text-gray-500"}`}>USD</span>
          </div>
        )}

        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/manage/right.svg`}
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-18 font-semibold">Get Started Instantly</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/manage/right.svg`}
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-18 font-semibold">Keep Forever</h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/manage/right.svg`}
              alt="right-icon"
              width={21}
              height={14}
            />
            <h4 className="text-18 font-semibold">No Subscription Needed</h4>
          </div>
        </div>

        <div className="mt-6 relative text-center">
          <div className="dance-text text-center text-red-500 font-bold text-xl mb-5">
            50% OFF - LIMITED TIME OFFER!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-14 manage justify-items-center">
          {filteredData.map((items, i) => (
            <div
              className="shadow-manage-shadow border border-border text-center p-10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary transform hover:scale-[1.02] rounded-lg w-full max-w-sm"
              key={i}
            >
              <h2 className="text-2xl font-bold mb-2">{items.heading}</h2>
              <div className="mb-2">
                <span className="text-4xl font-bold text-primary">{items.formattedPrice}</span>
                <span className="ml-2 text-gray-400 line-through">{items.formattedOriginalPrice}</span>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                One-time payment
              </p>
              {/* Map through the features object and render each key-value pair dynamically */}
              {Object.entries(items.features).map(([key, value]) => (
                <h3 className="text-sm font-medium text-darkgrey mb-3" key={key}>
                  {value}
                </h3>
              ))}
              <div className="mt-6">
                <PaymentButton
                  planName={items.heading}
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
