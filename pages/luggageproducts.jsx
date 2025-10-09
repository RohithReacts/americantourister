"use client";

import React from "react";
import { useToast } from "@/components/toastprovider";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { PlusIcon, X } from "lucide-react";
import { useCart } from "@/components/data/CartContext";

export default function LuggageProducts() {
  const toast = useToast();
  const { addToCart } = useCart();

  // Product list
  const products = [
    { name: "Airconic", price: 8137, image: "/images/amtairc.webp", size: 79 },
    { name: "Circurity +", price: 6200, image: "/images/circurity.webp", size: 77 },
    { name: "Diamo", price: 3490, image: "/images/diamo.webp", size: 55 },
    { name: "Bern", price: 7450, image: "/images/bern.jpg", size: 84 },
  ];

  // Handle Add to Cart with toast
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart successfully!`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 p-4">
      {products.map((product, index) => (
        <MorphingDialog
          key={index}
          transition={{ type: "spring", bounce: 0.05, duration: 0.25 }}
        >
          {/* Trigger (Card) */}
          <MorphingDialogTrigger
            style={{ borderRadius: "12px" }}
            className="flex max-w-[250px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <MorphingDialogImage
              src={product.image}
              alt={product.name}
              className="h-60 w-80 object-cover"
            />

            <div className="flex grow flex-row items-end justify-between px-3 py-2">
              <div>
                <MorphingDialogTitle className="text-zinc-950 dark:text-zinc-50 text-sm font-semibold">
                  {product.name}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className="text-zinc-700 dark:text-zinc-400 text-sm">
                  ₹{product.price}
                </MorphingDialogSubtitle>
              </div>

              <div
                role="button"
                onClick={(e) => handleAddToCart(product, e)}
                className="ml-1 flex h-6 w-6 items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                <PlusIcon size={12} />
              </div>
            </div>
          </MorphingDialogTrigger>

          {/* Dialog Content */}
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{ borderRadius: "24px" }}
              className="relative flex flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
            >
              <MorphingDialogImage
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <MorphingDialogTitle className="text-2xl text-zinc-950 dark:text-zinc-50 font-semibold">
                  {product.name}
                </MorphingDialogTitle>

                <p className="mt-2 text-zinc-500 text-sm">
                  Price:{" "}
                  <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                    ₹{product.price}
                  </span>
                </p>

                <MorphingDialogDescription>
                  <p className="mt-2 text-zinc-500 text-sm">
                    Size: {product.size} cm
                  </p>
                </MorphingDialogDescription>
              </div>

              <MorphingDialogClose className="absolute right-4 top-4 rounded-full p-1 text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800">
                <X size={20} />
              </MorphingDialogClose>
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
      ))}
    </div>
  );
}
