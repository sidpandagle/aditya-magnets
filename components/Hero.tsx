import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-visual" role="img" aria-label="Hand holding photo magnets placeholder">📸</div>
      <div>
        <h1 id="hero-heading">Create Personalized Fridge Magnets</h1>
        <p className="lead">Transform your favorite memories into durable, vibrant magnets that add personality to every surface. High-quality prints. Fast turn‑around. Loved by thousands.</p>
        <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
          {(() => {
            const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15551234567';
            const askStart = encodeURIComponent('Hi! I want to create custom fridge photo magnets.');
            const askSizes = encodeURIComponent('Can you share available sizes and finishing options for magnets?');
            return (
              <>
                <a
                  href={`https://wa.me/${waNumber}?text=${askStart}`}
                  className="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp to start your custom magnets"
                >Chat on WhatsApp</a>
                <a
                  href={`https://wa.me/${waNumber}?text=${askSizes}`}
                  className="button outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ask about sizes and options on WhatsApp"
                >Ask About Sizes</a>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};
