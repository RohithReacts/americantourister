"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useCart } from "@/components/data/CartContext";

export function Navbar() {

  const [isOpen, setIsOpen] = React.useState(false);
  const { cart, removeItemFromCart, drawerOpen, setDrawerOpen } = useCart();

  const navItems = [
    { href: "#luggage", label: "Luggage" },
    { href: "#backpacks", label: "Backpacks" },
    { href: "#duffles", label: "Duffles" },
    { href: "#connect", label: "Connect" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/50">
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
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-zinc-900 dark:text-gray-200 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Cart Icon */}
          <div
            onClick={() => setDrawerOpen(true)}
            className="relative cursor-pointer"
          >
            <ShoppingBag className="h-6 w-6 text-gray-700 dark:text-gray-200 hover:text-zinc-900 dark:hover:text-white transition-colors" />
            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 py-0.5 text-xs text-white shadow">
                {cart.length}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          {/* Cart Icon Mobile */}
          <div
            onClick={() => setDrawerOpen(true)}
            className="relative cursor-pointer"
          >
            <ShoppingBag className="h-6 w-6 text-gray-700 dark:text-gray-200 hover:text-zinc-900 dark:hover:text-white transition-colors" />
            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 py-0.5 text-xs text-white shadow">
                {cart.length}
              </span>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
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
            className="md:hidden px-4 pb-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 shadow-lg"
          >
            <ul className="flex flex-col justify-center items-center space-y-2">
              {navItems.map((item) => (
                <li key={item.href} className="w-full text-center">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 hover:text-zinc-900 dark:text-gray-200 dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer Desktop (Right Side) */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="hidden md:flex fixed top-0 right-0 h-80 w-80 bg-white dark:bg-zinc-900 z-50 shadow-xl flex-col rounded-l-xl"
            >
              <CartContent cart={cart} removeItemFromCart={removeItemFromCart} setDrawerOpen={setDrawerOpen} />
            </motion.div>

            {/* Drawer Mobile (Bottom Slide-up) */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="md:hidden fixed bottom-0 left-0 w-full h-[70%] bg-white dark:bg-zinc-900 z-50 shadow-2xl rounded-t-xl flex flex-col"
            >
              <CartContent cart={cart} removeItemFromCart={removeItemFromCart} setDrawerOpen={setDrawerOpen} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* Cart Content (shared between desktop & mobile drawers) */
function CartContent({ cart, removeItemFromCart, setDrawerOpen }) {

  return (
    <>
      <div className="flex items-center justify-between border-b p-4 dark:border-zinc-800">
        <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
          Your Cart
        </h2>
        <button
          onClick={() => setDrawerOpen(false)}
          className="p-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          <X size={18} className="text-zinc-700 dark:text-zinc-300" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {cart.length === 0 ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 border-b pb-2 justify-between dark:border-zinc-800"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                    {item.name}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    ₹{item.price}
                  </span>
                </div>
              </div>
              <button
                onClick={() => removeItemFromCart(idx)}
                className="p-3 cursor-pointer"
              >
                <Trash2 className="w-5"  />
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="border-t p-4 dark:border-zinc-800">
          <button className="w-full rounded-lg bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 transition">
            Checkout
          </button>
        </div>
      )}
    </>
  );
}
