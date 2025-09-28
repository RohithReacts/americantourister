"use client";

import React from "react";
import Image from "next/image";
import { LaptopMinimalIcon } from "lucide-react";
import { motion } from "motion/react";

const leftButton = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};


export default function Backpacks() {
  return (
    <section className="px-6 py-12 md:py-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Product Image */}
        <div className="w-full md:w-[380px] lg:w-[420px]  rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700">
          <Image
            src="/images/amt1.webp"
            alt="American Tourister Luggage"
            width={825}
            height={1024}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
         
          <h2 className="text-xl md:text-2xl mt-3 font-semibold text-neutral-800 dark:text-neutral-200">
            The brand today
          </h2>

          

          {/* Description */}
          <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
          Trusted by generation of travellers we're proud of our 90 year story.
          </p>

          
          <div className="flex gap-4 mt-5">
              <motion.a
                variants={leftButton}
                href="/"
                className="flex items-center gap-2 px-5 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
              >
                <LaptopMinimalIcon className="w-4 h-4" />
                 Discover
              </motion.a>
              
            </div>
        </div>
      </div>
    </section>
  );
}
