"use client";
import Image from "next/image";
import { Box } from "@radix-ui/themes";
import { motion } from "framer-motion";
import AmericanTouristerCards from "@/pages/americancards";

export default function Page() {
  return (
    <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-smooth">
      <motion.main className="space-y-24 py-12">
        <section>
      <Image
        src="/images/travel.webp"
        alt="travel"
        width={1300}
        height={400}
        priority
        className="object-cover rounded-xl"
      />
      <AmericanTouristerCards />
      <div className="relative w-full max-w-6xl mx-auto">
        <Image
          src="/images/amt3.webp"
          alt="travel"
          width={1300}
          height={400}
          priority
          className="object-cover rounded-lg"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-7xl font-bold text-center drop-shadow-lg">
            Welcome to the world of American Tourister!
          </h1>
        </div>
      </div>
    </section>
      </motion.main>
    </Box>
  );
}


