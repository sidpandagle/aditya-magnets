import React, { useState } from "react";
import OrderModal from "./OrderModal";
import { Button } from "./ui/button";
import { WHATSAPP_NUMBER } from "../lib/config";

interface Props {
  name: string;
}

type SizeKey = "S" | "M" | "L" | "XL";
const sizeLabels: Record<SizeKey, string> = {
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "X-Large",
};

export default function ProductOptions({ name }: Props) {
  const [size, setSize] = useState<SizeKey>("M");
  const [quantity, setQuantity] = useState<number>(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const waNumber = WHATSAPP_NUMBER;

  function openWhatsApp() {
    const text = `Hi! I'm interested in ${name}. Size: ${sizeLabels[size]} (${size}). Quantity: ${quantity}. Please share how to proceed.`;
    const u = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(u, "_blank", "noopener");
  }

  return (
    <div className="flex flex-col gap-5 mb-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="font-semibold">Size</label>
          <span className="text-xs text-slate-500">Choose one</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {(Object.keys(sizeLabels) as SizeKey[]).map((s) => (
            <button
              key={s}
              type="button"
              className={
                `h-10 rounded-md border text-sm transition-colors ` +
                (size === s
                  ? "bg-primary text-primary-foreground border-transparent shadow"
                  : "bg-background text-foreground border-slate-300 hover:bg-accent hover:text-accent-foreground")
              }
              onClick={() => setSize(s)}
              aria-pressed={size === s}
              aria-label={`Select size ${sizeLabels[s]}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="font-semibold">Quantity</label>
          <span className="text-xs text-slate-500">Adjust amount</span>
        </div>
        <div className="inline-flex items-center rounded-md border border-slate-300 bg-background">
          <button
            type="button"
            className="h-10 w-10 text-lg hover:bg-accent hover:text-accent-foreground rounded-l-md"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value) || 1))}
            className="h-10 w-16 text-center outline-none"
            min={1}
            aria-label="Quantity"
          />
          <button
            type="button"
            className="h-10 w-10 text-lg hover:bg-accent hover:text-accent-foreground rounded-r-md"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="button" onClick={() => setIsModalOpen(true)} className="flex-1" aria-label={`Buy ${name} now`}>
          Buy Now
        </Button>
        <Button type="button" variant="outline" onClick={openWhatsApp} className="flex-1" aria-label={`Chat on WhatsApp about ${name} with selected options`}>
          Chat on WhatsApp
        </Button>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} productName={name} size={size} quantity={quantity} priceEach={""} />
    </div>
  );
}
