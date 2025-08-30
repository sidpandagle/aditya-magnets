import React from "react";
import { buttonVariants } from "./ui/button";
import { WHATSAPP_NUMBER } from "../lib/config";

export const Hero: React.FC = () => {
  const waNumber = WHATSAPP_NUMBER;
  const askStart = encodeURIComponent("Hi! I want to create custom fridge photo magnets.");
  const askSizes = encodeURIComponent(
    "Can you share available sizes and finishing options for magnets?"
  );
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 via-white to-white" />
      <div className="container py-16 grid gap-10 md:grid-cols-2 items-center">
        <div className="rounded-xl bg-slate-50 aspect-[4/3] flex items-center justify-center text-5xl text-slate-400 shadow-md">
          <span role="img" aria-label="Hand holding photo magnets placeholder">
            📸
          </span>
        </div>
        <div>
          <h1 id="hero-heading" className="text-4xl/tight md:text-5xl font-semibold tracking-tight">
            Create Personalized Fridge Magnets
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Transform your favorite memories into durable, vibrant magnets that add personality to every surface.
            High-quality prints. Fast turn‑around. Loved by thousands.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${waNumber}?text=${askStart}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp to start your custom magnets"
              className={buttonVariants({ variant: "default" }) + " px-5 py-3 text-base"}
            >
              Chat on WhatsApp
            </a>
            <a
              href={`https://wa.me/${waNumber}?text=${askSizes}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask about sizes and options on WhatsApp"
              className={buttonVariants({ variant: "outline" }) + " px-5 py-3 text-base"}
            >
              Ask About Sizes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
