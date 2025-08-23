"use client";
import React, { useState } from 'react';

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
        name: '',
        email: '',
        phone: '',
        address: '',
        specialInstructions: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the order data to your backend
        console.log('Order submitted:', {
            ...formData,
            product: productName,
            size,
            quantity,
            priceEach
        });
        alert('Order submitted successfully! We will contact you soon.');
        onClose();
        setFormData({ name: '', email: '', phone: '', address: '', specialInstructions: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    if (!isOpen) return null;

    const totalPrice = (parseFloat(priceEach) * quantity).toFixed(2);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '1rem'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '2rem',
                    maxWidth: '500px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflowY: 'auto'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Complete Your Order</h2>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#6b7280'
                        }}
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                </div>

                <div style={{
                    backgroundColor: '#f9fafb',
                    padding: '1rem',
                    borderRadius: '6px',
                    marginBottom: '1.5rem',
                    border: '1px solid #e5e7eb'
                }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>Order Summary</h3>
                    <p style={{ margin: '0.25rem 0', fontSize: '0.875rem' }}><strong>Product:</strong> {productName}</p>
                    <p style={{ margin: '0.25rem 0', fontSize: '0.875rem' }}><strong>Size:</strong> {size}</p>
                    <p style={{ margin: '0.25rem 0', fontSize: '0.875rem' }}><strong>Quantity:</strong> {quantity}</p>
                    <p style={{ margin: '0.25rem 0', fontSize: '0.875rem' }}><strong>Price per item:</strong> ${priceEach}</p>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '1rem', fontWeight: 'bold' }}>
                        <strong>Total: ${totalPrice}</strong>
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="name" style={{ display: 'block', fontWeight: 600, marginBottom: '.35rem' }}>
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '.65rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                fontSize: '.875rem'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email" style={{ display: 'block', fontWeight: 600, marginBottom: '.35rem' }}>
                            Email Address *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '.65rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                fontSize: '.875rem'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="phone" style={{ display: 'block', fontWeight: 600, marginBottom: '.35rem' }}>
                            Phone Number *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '.65rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                fontSize: '.875rem'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="address" style={{ display: 'block', fontWeight: 600, marginBottom: '.35rem' }}>
                            Shipping Address *
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            rows={3}
                            style={{
                                width: '100%',
                                padding: '.65rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                fontSize: '.875rem',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label htmlFor="specialInstructions" style={{ display: 'block', fontWeight: 600, marginBottom: '.35rem' }}>
                            Special Instructions (Optional)
                        </label>
                        <textarea
                            id="specialInstructions"
                            name="specialInstructions"
                            value={formData.specialInstructions}
                            onChange={handleChange}
                            rows={2}
                            placeholder="Any special requests or design preferences..."
                            style={{
                                width: '100%',
                                padding: '.65rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                fontSize: '.875rem',
                                resize: 'vertical'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'flex-end' }}>
                        <button
                            type="button"
                            onClick={onClose}
                            className="button outline"
                            style={{ padding: '.75rem 1.5rem' }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="button"
                            style={{ padding: '.75rem 1.5rem' }}
                        >
                            Submit Order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}