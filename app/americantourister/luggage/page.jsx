"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBagIcon } from "lucide-react";
import { CarouselSize } from "../cards";
import { motion } from "framer-motion";

const leftButton = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};


export default function Luggage() {
  return (
    <section className="px-6 py-12 md:py-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left: Product Image */}
        <div className="w-full md:w-[380px] lg:w-[420px]  rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700">
          <Image
            src="/images/amt.webp"
            alt="American Tourister Luggage"
            width={824}
            height={1024}
            priority
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Product Info */}
        <div className="flex-1 max-w-2xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
            New Arrivals
          </h1>
          <h2 className="text-xl md:text-2xl mt-3 font-semibold text-neutral-800 dark:text-neutral-200">
            Aerostep <span className="ml-2 text-white-600">₹4,550.00</span>
          </h2>

          {/* Old Price */}
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400 line-through">
            ₹9,100.00
          </p>

          {/* Description */}
          <p className="mt-5 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Shop new carry-on luggage, backpacks, and more. Freshen up your next
            trip with the latest in travel gear and timeless designs.
          </p>

          
            <div className="flex gap-4 mt-5">
              <motion.a
                variants={leftButton}
                href="/"
                className="flex items-center gap-2 px-5 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
              >
                <ShoppingBagIcon className="w-4 h-4" />
                 Shop Now
              </motion.a>
              
            </div>
        </div>
      </div>
      <div>
        <CarouselSize />
      </div>
    </section>
  );
}
