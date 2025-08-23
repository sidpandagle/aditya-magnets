import React from 'react';

const data = [
  { title: 'High-Resolution Prints', body: 'Vivid colors and sharp details on a smooth matte surface built to last.' },
  { title: 'Durable Magnet Backing', body: 'Firmly hugs any magnetic surface without sliding or scratching.' },
  { title: 'Water & Fade Resistant', body: 'Engineered inks protect against moisture, UV rays, and everyday handling.' },
  { title: 'Fast Turnaround', body: 'Upload in minutes—most orders ship within 48 hours.' },
  { title: 'Eco Conscious Materials', body: 'Printed with minimal-waste processes and recyclable packaging.' },
  { title: 'Loved by Thousands', body: 'Thousands of happy customers showcase their favorite moments daily.' }
];

export const Features: React.FC = () => (
  <section className="section" aria-labelledby="features-heading">
    <div className="container">
      <h2 id="features-heading">Why You’ll Love Our Photo Magnets</h2>
      <p className="section-sub">Designed for longevity and impact—every magnet is produced with premium substrates, crisp archival inks, and careful finishing for a keepsake that stands up to daily life.</p>
      <div className="grid features-grid">
        {data.map(f => (
          <div key={f.title} className="feature-card" aria-label={f.title}>
            <h3>{f.title}</h3>
            <p>{f.body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
