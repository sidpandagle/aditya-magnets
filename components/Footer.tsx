import Link from 'next/link';
import React from 'react';

// Accept a precomputed year (optional) to keep SSR/CSR markup identical
export const Footer: React.FC<{ year?: number }> = ({ year }) => {
  const y = year ?? 2025; // fixed default to prevent hydration drift
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Products</h4>
            <Link href="/">Fridge Magnets</Link>
            <Link href="/photo-magnets">Photo Magnets</Link>
            <Link href="/retro-prints">Retro Prints</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/learn-and-make">Learn & Make</Link>
            <Link href="/contact">Contact</Link>
          </div>
            <div>
            <h4>Support</h4>
            <Link href="/help">Help Center</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/returns">Returns</Link>
          </div>
          <div>
            <h4>Follow</h4>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Pinterest">Pinterest</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
        <div className="copyright">© {y} SnapStickSmile Co. All rights reserved.</div>
      </div>
    </footer>
  );
};
