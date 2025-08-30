import React from "react";
import { whatsappLink } from "../lib/config";

export const meta = () => [{ title: "Contact | Aaditya Magnets" }];

export default function ContactPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="text-slate-700 max-w-2xl mb-6">
        Questions, custom requests, or bulk orders? We’d love to help.
      </p>
      <a
        className="inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
        href={whatsappLink("Hi! I have a question about your magnets.")}
        target="_blank"
        rel="noreferrer"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}
