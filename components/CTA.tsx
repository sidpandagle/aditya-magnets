import React from 'react';

export const CTA: React.FC = () => (
  <section className="section" id="create" aria-labelledby="cta-heading">
    <div className="container">
      <div className="cta-banner">
        <h2 id="cta-heading">Ready to Design Your Custom Magnets?</h2>
        <p style={{ maxWidth:480, margin:0 }}>Chat with us directly on WhatsApp for quick help, size guidance, pricing, and an easy way to send your favorite photos.</p>
        <div className="cta-actions">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15551234567'}?text=${encodeURIComponent('Hi! I would like to start a custom magnet order.')}`}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp to start a custom magnet order"
          >Chat Now</a>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '15551234567'}?text=${encodeURIComponent('Could you share more details about materials and finishes?')}`}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask for more details on WhatsApp"
          >Ask a Question</a>
        </div>
      </div>
    </div>
  </section>
);
