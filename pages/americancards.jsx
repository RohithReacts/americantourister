"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Truck,
  Award,
  Store,
  Headphones,
  Link as LinkIcon,
  MonitorDotIcon,
  Send,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function AmericanTouristerCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12">
      {/* Header */}
      <header className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          American Tourister — Services & Info
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Quick access to warranty, delivery, support and useful guides.
        </p>
      </header>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Warranty */}
        <Card className="group hover:shadow-md transition-transform hover:scale-[1.02]">
          <CardHeader>
            <div className="p-2 w-fit rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10">
              <Globe className="h-6 w-6" />
            </div>
            <CardTitle className="mt-3">International Warranty</CardTitle>
            <CardDescription>
              Global brand trusted by millions with presence in 120+ countries.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <span className="text-xs text-muted-foreground">
              Since 1933 • Global Support
            </span>
          </CardFooter>
        </Card>

        {/* Fast Delivery */}
        <Card className="group hover:shadow-md transition-transform hover:scale-[1.02]">
          <CardHeader>
            <div className="p-2 w-fit rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10">
              <Truck className="h-6 w-6" />
            </div>
            <CardTitle className="mt-3">Fast Delivery</CardTitle>
            <CardDescription>
              Orders delivered within 5–7 working days across India.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <span className="text-xs text-muted-foreground">
              Domestic Shipping
            </span>
          </CardFooter>
        </Card>

        {/* Trusted Globally */}
        <Card className="group hover:shadow-md transition-transform hover:scale-[1.02]">
          <CardHeader>
            <div className="p-2 w-fit rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10">
              <Award className="h-6 w-6" />
            </div>
            <CardTitle className="mt-3">Trusted Globally</CardTitle>
            <CardDescription>
              Award-winning designs produced with world-class standards.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <span className="text-xs text-muted-foreground">
              Award-winning design
            </span>
          </CardFooter>
        </Card>

        {/* Store */}
        <Card className="group sm:col-span-2 lg:col-span-1 hover:shadow-md transition-transform hover:scale-[1.02]">
          <CardHeader>
            <div className="p-2 w-fit rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10">
              <Store className="h-6 w-6" />
            </div>
            <CardTitle className="mt-3">Full Original Store</CardTitle>
            <CardDescription>
              Explore the complete American Tourister collection online.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {[
              { href: "/store", label: "Shop All" },
              { href: "/new-arrivals", label: "New Arrivals" },
              { href: "/best-sellers", label: "Best Sellers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm rounded-full border px-3 py-1 hover:bg-muted transition"
              >
                {link.label}
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Support */}
        <Card className="group sm:col-span-2 hover:shadow-md transition-transform hover:scale-[1.02]">
          <CardHeader>
            <div className="p-2 w-fit rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10">
              <Headphones className="h-6 w-6" />
            </div>
            <CardTitle className="mt-3">Support</CardTitle>
            <CardDescription>
              Service options, warranty, returns & contact information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-2 text-sm">
              {[
                { title: "Service and Warranty", desc: "Authorized centres & claims" },
                { title: "Return and Exchange", desc: "Hassle-free returns" },
                { title: "Contact", desc: "Customer care & stores" },
                { title: "TSA Lock Instructions", desc: "Set and reset TSA locks" },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="mt-1 h-3.5 w-3.5 rounded-full bg-muted" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex gap-4 flex-wrap">
            <motion.div variants={fadeLeft} initial="hidden" animate="show">
              <Button asChild>
                <a href="https://americantourister.in/pages/service-and-warranty" className="flex gap-2">
                  <MonitorDotIcon className="h-4 w-4" />
                  Visit Support
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeRight} initial="hidden" animate="show">
              <Button asChild variant="secondary">
                <a href="/connect" className="flex gap-2">
                  <Send className="h-4 w-4" />
                  Contact Us
                </a>
              </Button>
            </motion.div>
          </CardFooter>
        </Card>

        {/* Quick Links */}
        <Card className="group hover:shadow-md transition-transform hover:scale-[1.02]">
          <CardHeader>
            <div className="p-2 w-fit rounded-md bg-muted text-muted-foreground group-hover:bg-primary/10">
              <LinkIcon className="h-6 w-6" />
            </div>
            <CardTitle className="mt-3">Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: "Damage Policy", href: "https://americantourister.in/pages/damage-policy" },
                { label: "Care and Cleaning", href: "https://americantourister.in/pages/care-and-cleaning" },
                { label: "Packing Tips", href: "https://americantourister.in/pages/packing-tips" },
                { label: "Sustainability", href: "https://americantourister.in/pages/sustainability" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-foreground transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

