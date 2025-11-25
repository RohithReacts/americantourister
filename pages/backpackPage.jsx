"use client";

import React from "react";
import Image from "next/image";
import { LaptopMinimalIcon } from "lucide-react";
import { motion } from "framer-motion"; // ✅ correct import

const leftButton = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function BackpacksPage() {
  return (
    <section className="px-4 sm:px-6 py-12 md:py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Product Image */}
        <div className="w-full sm:w-[320px] md:w-[380px] lg:w-[420px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700">
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
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
            The brand today
          </h2>

          {/* Description */}
          <p className="mt-5 text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Trusted by generations of travellers, we're proud of our 90 year story.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start mt-6">
            <motion.a
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={leftButton}
              href="/"
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-black text-white text-sm md:text-base font-medium 
                         hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
            >
              <LaptopMinimalIcon className="w-4 h-4 md:w-5 md:h-5" />
              Discover
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
