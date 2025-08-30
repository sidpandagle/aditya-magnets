import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import clsx from "clsx";
import { buttonVariants } from "./ui/button";
import { WHATSAPP_NUMBER } from "../lib/config";

export const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const waNumber = WHATSAPP_NUMBER;
  const waMessage = "Hi! I would like to know more about your photo magnets.";
  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  const links = [
    { href: "/fridge-magnets", label: "Fridge Magnets" },
    { href: "/photo-magnets", label: "Photo Magnets" },
    { href: "/retro-prints", label: "Retro Prints" },
    { href: "/save-the-date", label: "Save the Date" },
    { href: "/learn-and-make", label: "Learn & Make" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold tracking-tight" aria-label="Site home">
          A/M
        </Link>
        <nav className={clsx("nav-links", open && "open")} aria-label="Main navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={clsx({ active: pathname === l.href })}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={clsx(buttonVariants({ variant: "default", size: "default" }), "hidden sm:inline-flex")}
          >
            WhatsApp
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
};
