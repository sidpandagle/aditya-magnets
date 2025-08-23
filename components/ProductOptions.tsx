"use client";
import React, { useState } from 'react';
import OrderModal from './OrderModal';

interface Props {
  name: string;
}

const sizes = [
  '2x2 squares',
  '3x3 squares',
  '2x3 rectangle',
  '3x4 rectangle',
  '4x4 squares'
];

const quantities = [
  { qty: 5, price: '2.54' },
  { qty: 10, price: '2.04' },
  { qty: 15, price: '1.91' },
  { qty: 20, price: '1.82' },
  { qty: 25, price: '1.76' },
  { qty: 30, price: '1.71' },
  { qty: 40, price: '1.66' },
  { qty: 50, price: '1.61' },
  { qty: 60, price: '1.56' },
  { qty: 70, price: '1.51' },
  { qty: 80, price: '1.45' },
  { qty: 90, price: '1.40' },
  { qty: 100, price: '1.35' }
];

export default function ProductOptions({ name }: Props) {
  const [size, setSize] = useState<string>(sizes[0]);
  const [quantity, setQuantity] = useState<number>(quantities[0].qty);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15551234567';

  function openWhatsApp() {
    const qtyObj = quantities.find((q) => q.qty === quantity);
    const priceEach = qtyObj ? qtyObj.price : '';
    const text = `Hi! I\'m interested in ${name}. Size: ${size}. Quantity: ${quantity} (${priceEach} each). Please share how to proceed.`;
    const u = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    window.open(u, '_blank', 'noopener');
  }

  function openOrderModal() {
    setIsModalOpen(true);
  }

  const selectedQuantityObj = quantities.find((q) => q.qty === quantity);
  const priceEach = selectedQuantityObj ? selectedQuantityObj.price : '0';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '.85rem', marginBottom: '1.5rem' }}>
      <div>
        <label htmlFor="size-select" style={{ display: 'block', fontWeight: 600, marginBottom: '.35rem' }}>Size</label>
        <select
          id="size-select"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={{ width: '100%', padding:'.65rem', border: '1px solid #d1d5db', borderRadius: 4 }}
        >
          {sizes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="quantity-select" style={{ display: 'block', fontWeight: 600, marginBottom: '.35rem' }}>Quantity</label>
        <select
          id="quantity-select"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{ width: '100%', padding:'.65rem', border: '1px solid #d1d5db', borderRadius: 4, height: '3.25rem' }}
        >
          {quantities.map((q) => (
            <option key={q.qty} value={q.qty}>{`${q.qty} | ${q.price} each`}</option>
          ))}
        </select>
      </div>

      <div style={{ display: 'flex', gap: '.75rem' }}>
        <button
          type="button"
          className="button"
          onClick={openOrderModal}
          style={{ flex: 1 }}
          aria-label={`Buy ${name} now`}
        >
          Buy Now
        </button>
        <button
          type="button"
          className="button outline"
          onClick={openWhatsApp}
          style={{ flex: 1 }}
          aria-label={`Chat on WhatsApp about ${name} with selected options`}
        >
          Chat on WhatsApp
        </button>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={name}
        size={size}
        quantity={quantity}
        priceEach={priceEach}
      />
    </div>
  );
}
