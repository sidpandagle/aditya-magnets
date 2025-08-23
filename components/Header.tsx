"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Precompute WhatsApp URL on client; for SSR consistency keep deterministic string
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15551234567';
  const waMessage = 'Hi! I would like to know more about your photo magnets.';
  const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;
  const links = [
    { href: '/fridge-magnets', label: 'Fridge Magnets' },
    { href: '/photo-magnets', label: 'Photo Magnets' },
    { href: '/retro-prints', label: 'Retro Prints' },
    { href: '/save-the-date', label: 'Save the Date' },
    { href: '/learn-and-make', label: 'Learn & Make' }
  ];
  return (
    <header>
      <div className="container navbar">
        <Link href="/" className="logo" aria-label="Site home">A/M</Link>
        <nav className={clsx('nav-links', open && 'open')} aria-label="Main navigation">
          {links.map(l => (
            <Link key={l.href} href={l.href} className={clsx({ active: pathname === l.href })} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </nav>
        <div style={{ display:'flex', gap:'0.75rem', alignItems:'center' }}>
          <a
            href={whatsappUrl}
            className="button"
            style={{ whiteSpace:'nowrap' }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            WhatsApp
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
};
