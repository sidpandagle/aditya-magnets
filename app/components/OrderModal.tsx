import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  size: string;
  quantity: number;
  priceEach: string;
}

export default function OrderModal({ isOpen, onClose, productName, size, quantity, priceEach }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    specialInstructions: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", {
      ...formData,
      product: productName,
      size,
      quantity,
      priceEach,
    });
    alert("Order submitted successfully! We will contact you soon.");
    onClose();
    setFormData({ name: "", email: "", phone: "", address: "", specialInstructions: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isOpen) return null;

  const totalPrice = (parseFloat(priceEach) * quantity).toFixed(2);

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 px-4 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold m-0">Complete Your Order</h2>
          <button onClick={onClose} aria-label="Close modal" className="text-slate-500 text-2xl leading-none">
            ×
          </button>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-md p-4 mb-6">
          <h3 className="text-sm font-semibold mb-2">Order Summary</h3>
          <p className="text-sm">
            <strong>Product:</strong> {productName}
          </p>
          <p className="text-sm">
            <strong>Size:</strong> {size}
          </p>
          <p className="text-sm">
            <strong>Quantity:</strong> {quantity}
          </p>
          <p className="text-sm">
            <strong>Price per item:</strong> ${priceEach}
          </p>
          <p className="text-base font-bold mt-2">Total: ${totalPrice}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full h-11 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full h-11 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-semibold mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full h-11 rounded-md border border-slate-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label htmlFor="address" className="block font-semibold mb-1">
              Shipping Address *
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={3}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div>
            <label htmlFor="specialInstructions" className="block font-semibold mb-1">
              Special Instructions (Optional)
            </label>
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              rows={2}
              placeholder="Any special requests or design preferences..."
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center h-11 px-4 rounded-md border border-teal-600 text-teal-700 hover:bg-teal-600/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center h-11 px-4 rounded-md bg-teal-600 text-white hover:bg-teal-700"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
