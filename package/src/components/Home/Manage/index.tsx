"use client";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { PaymentButton, PlanName } from "@/components/Home/PaymentButton";

type Currency = 'INR' | 'USD';

// Conversion rate: 1 USD = 83.5 INR (you can update this with current rates or fetch from an API)
const USD_TO_INR_RATE = 83.5;

type Plan = {
  heading: PlanName;
  price: {
    monthly: number;
    yearly: number;
  };
  inrPrice: {
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
    inrPrice: {
      monthly: 3380,
      yearly: 30418,
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
    inrPrice: {
      monthly: 5113,
      yearly: 46025,
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
    inrPrice: {
      monthly: 7712,
      yearly: 69436,
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
  const [currency, setCurrency] = useState<Currency>('USD'); // Default to USD
  const [isLoading, setIsLoading] = useState(true);

  const toggleEnabled = () => {
    setEnabled((prevEnabled) => !prevEnabled);
    setSelectedCategory((prevCategory) => (prevCategory === "yearly" ? "monthly" : "yearly"));
  };

  // Detect user's country and set currency accordingly
  useEffect(() => {
    const detectUserCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // If user is from India, set currency to INR, otherwise keep USD
        if (data.country === 'IN') {
          setCurrency('INR');
        }
      } catch (error) {
        console.error('Error detecting user location:', error);
        // Default to USD if there's an error
        setCurrency('USD');
      } finally {
        setIsLoading(false);
      }
    };

    detectUserCountry();
  }, []);

  const toggleCurrency = () => {
    setCurrency(prev => prev === 'INR' ? 'USD' : 'INR');
  };

  const formatPrice = (price: number, inrPrice: number): string => {
    return currency === 'INR' ? `₹${inrPrice}` : `$${price}`;
  };

  const filteredData = plans.map((plan) => {
    const price = plan.price[selectedCategory];
    const inrPrice = plan.inrPrice[selectedCategory];
    return {
      ...plan,
      price,
      inrPrice,
      formattedPrice: formatPrice(price, inrPrice),
      usdPrice: price // Store the USD price for displaying in the INR view
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
          <span className={`mx-2 font-medium ${currency === 'INR' ? 'text-primary' : 'text-gray-500'}`}>INR</span>
          <Switch
            checked={currency === 'USD'}
            onChange={toggleCurrency}
            className={`${
              currency === 'USD' ? 'bg-primary' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Toggle currency</span>
            <span
              className={`${
                currency === 'USD' ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
            <span className={`mx-2 font-medium ${currency === 'USD' ? 'text-primary' : 'text-gray-500'}`}>USD</span>
          </div>
        )}

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
              <h2 className="text-2xl font-bold mb-4">{items.heading}</h2>
              <h3 className="text-4xl font-bold mb-2">{items.formattedPrice}</h3>
              <p className="text-gray-600 mb-6">
                {selectedCategory === 'yearly' ? 'per year' : 'per month'}
                {currency === 'INR' ? (
                  <span className="text-sm"> (≈ ${items.usdPrice} USD)</span>
                ) : (
                  <span className="text-sm"> (billed in USD)</span>
                )}
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
