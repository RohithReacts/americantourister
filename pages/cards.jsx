"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselSize() {
  const images = [
    "/images/baby.jpg",
    "/images/circurity.jpg",
    "/images/fast.jpg",
    "/images/alcove.jpg",
    "/images/air.webp",
  ]; // Make sure these are in public/images

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-4xl mx-auto mt-12"
    >
      <div className="text-center mb-6">
        <h1 className="text-2xl font-medium">Shop Products</h1>
        <h2 className="text-xl font-medium text-muted-foreground">
          Our favorite picks for the season
        </h2>
      </div>

      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-1/2 lg:basis-1/3"
          >
            <div className="p-2">
              <Card className="overflow-hidden rounded-2xl shadow-md">
                <CardContent className="relative aspect-[5/6] p-0">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex items-center justify-center gap-4 mt-10">
        <CarouselPrevious className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md" />
        <CarouselNext className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-md" />
      </div>
    </Carousel>
  );
}
