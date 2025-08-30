import React from "react";
import { Link } from "react-router";

export const Footer: React.FC<{ year?: number }> = ({ year }) => {
  const y = year ?? 2025;
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/60 py-12">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="mb-2 text-xs tracking-wider uppercase text-slate-600">Products</h4>
            <Link className="block text-slate-600 hover:text-teal-700" to="/fridge-magnets">Fridge Magnets</Link>
            <Link className="block text-slate-600 hover:text-teal-700" to="/photo-magnets">Photo Magnets</Link>
            <Link className="block text-slate-600 hover:text-teal-700" to="/retro-prints">Retro Prints</Link>
          </div>
          <div>
            <h4 className="mb-2 text-xs tracking-wider uppercase text-slate-600">Company</h4>
            <Link className="block text-slate-600 hover:text-teal-700" to="/about">About</Link>
            <Link className="block text-slate-600 hover:text-teal-700" to="/learn-and-make">Learn & Make</Link>
            <Link className="block text-slate-600 hover:text-teal-700" to="/contact">Contact</Link>
          </div>
          <div>
            <h4 className="mb-2 text-xs tracking-wider uppercase text-slate-600">Support</h4>
            <Link className="block text-slate-600 hover:text-teal-700" to="/help">Help Center</Link>
            <Link className="block text-slate-600 hover:text-teal-700" to="/shipping">Shipping</Link>
            <Link className="block text-slate-600 hover:text-teal-700" to="/returns">Returns</Link>
          </div>
          <div>
            <h4 className="mb-2 text-xs tracking-wider uppercase text-slate-600">Follow</h4>
            <a className="block text-slate-600 hover:text-teal-700" href="#" aria-label="Instagram">Instagram</a>
            <a className="block text-slate-600 hover:text-teal-700" href="#" aria-label="Pinterest">Pinterest</a>
            <a className="block text-slate-600 hover:text-teal-700" href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-slate-500">© {y} SnapStickSmile Co. All rights reserved.</div>
      </div>
    </footer>
  );
};
