"use client";

import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Aoscompo = ({ children }: any) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div>
      {children}
    </div>
  );
};

export default Aoscompo;
