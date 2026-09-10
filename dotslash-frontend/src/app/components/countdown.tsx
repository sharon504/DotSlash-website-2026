"use client"

import React, { useEffect, useState } from "react";
import { Space_Mono } from "next/font/google";
import dynamic from "next/dynamic";

const ShaderCanvas = dynamic(() => import("./shaderCanvas"), { ssr: false });

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

interface TimeLeft {
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

const CountDown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const difference = +new Date("2026-03-25T00:00:00") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timer = `${timeLeft.days || "00"}:${timeLeft.hours || "00"}:${timeLeft.minutes || "00"}:${timeLeft.seconds || "00"}`;

  return (
    <section className="relative bg-foreground text-logo-light overflow-hidden">
      <div className="relative h-[560px] md:h-[658px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-70">
          <ShaderCanvas image="/countdown.png" />
        </div>

        {/* Corner brackets */}
        <div className="border-t-2 border-l-2 border-logo-light/40 w-16 h-16 md:w-20 md:h-20 absolute top-6 left-6 z-20" />
        <div className="border-b-2 border-l-2 border-logo-light/40 w-16 h-16 md:w-20 md:h-20 absolute bottom-6 left-6 z-20" />
        <div className="border-t-2 border-r-2 border-logo-light/40 w-16 h-16 md:w-20 md:h-20 absolute top-6 right-6 z-20" />
        <div className="border-b-2 border-r-2 border-logo-light/40 w-16 h-16 md:w-20 md:h-20 absolute bottom-6 right-6 z-20" />

        <p className="absolute bottom-8 left-10 z-20 font-body text-xs uppercase tracking-[0.3em] text-logo-light/80">
          Reboot <span className="text-primary">/</span> 2026
        </p>

        <div className="absolute bottom-8 right-10 z-20 flex flex-col items-end">
          <p className="mb-2 font-body text-xs uppercase tracking-[0.3em] text-primary">
            Restarting in:
          </p>
          <h3 className={`${spaceMono.className} text-2xl md:text-5xl text-logo-light`}>
            {timer}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CountDown;