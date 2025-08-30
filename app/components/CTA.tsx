import React from "react";
import { buttonVariants } from "./ui/button";
import { WHATSAPP_NUMBER } from "../lib/config";

export const CTA: React.FC = () => (
  <section className="py-16" id="create" aria-labelledby="cta-heading">
    <div className="container">
      <div className="relative p-8 overflow-hidden text-white rounded-xl bg-gradient-to-br from-green-900/80 to-teal-700 md:p-12">
        <div className="absolute w-64 h-64 rounded-full -top-20 -right-20 bg-teal-500/30 blur-3xl" />
        <h2 id="cta-heading" className="text-2xl font-semibold md:text-3xl">Ready to Design Your Custom Magnets?</h2>
        <p className="max-w-xl mt-2 text-slate-100/90">Chat with us directly on WhatsApp for quick help, size guidance, pricing, and an easy way to send your favorite photos.</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I would like to start a custom magnet order.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp to start a custom magnet order"
            className={buttonVariants({ variant: "default" }) + " px-5 py-3 text-base"}
          >
            Chat Now
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Could you share more details about materials and finishes?")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask for more details on WhatsApp"
            className={buttonVariants({ variant: "secondary" }) + " px-5 py-3 text-base"}
          >
            Ask a Question
          </a>
        </div>
      </div>
    </div>
  </section>
);
