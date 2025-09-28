"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: "/luggage", label: "Luggage" },
    { href: "/backpacks", label: "Backpacks" },
    { href: "/duffles", label: "Duffles" },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/amt.png"
            alt="American Tourister Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="text-gray-800 dark:text-gray-200"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? (
              <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
          >
            <ul className="flex flex-col justify-center items-center space-y-2">
              {navItems.map((item) => (
                <li key={item.href} className="w-full text-center">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-800 dark:text-gray-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
