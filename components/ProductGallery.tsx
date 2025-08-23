"use client";
import React, { useState, useRef, useEffect } from 'react';

interface Props {
  images: string[]; // supports image URLs and video URLs (mp4)
  alt?: string;
}

export const ProductGallery: React.FC<Props> = ({ images, alt = 'Product image' }) => {
  const [mainIndex, setMainIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  if (!images || images.length === 0) return null;

  // clear any pending timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  // keyboard navigation (left/right)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        const prev = (mainIndex - 1 + images.length) % images.length;
        navigateTo(prev);
      } else if (e.key === 'ArrowRight') {
        const next = (mainIndex + 1) % images.length;
        navigateTo(next);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [mainIndex, images.length]);

  // when mainIndex changes: if it's a video, attempt to play it; pause otherwise
  useEffect(() => {
    const url = images[mainIndex];
    const isVideo = typeof url === 'string' && url.match(/\.mp4(\?|$)/i);
    if (isVideo) {
      // small delay to ensure element mounted after fade
      setTimeout(() => {
        try { mainVideoRef.current?.play(); } catch (e) { /* ignore */ }
      }, 260);
    } else {
      // pause any playing video
      try { mainVideoRef.current?.pause(); } catch (e) { /* ignore */ }
    }
  }, [mainIndex, images]);

  // centralized navigation function
  function navigateTo(index: number) {
    if (index === mainIndex) return;
    // pause any playing main video before switching
    try { mainVideoRef.current?.pause(); } catch (e) { /* ignore */ }
    setIsFading(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setMainIndex(index);
      setIsFading(false);
      // ensure thumbnail is visible
      try { thumbRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); } catch (e) { /* ignore */ }
      timeoutRef.current = null;
    }, 260);
  }

  return (
    <div>
      <div className="gallery-main-wrap" style={{ boxShadow:'var(--shadow-md)', position:'relative' }}>
  <button className="gallery-nav prev" aria-label="Previous image" onMouseDown={(e)=>e.preventDefault()} onClick={() => { const prev = (mainIndex - 1 + images.length) % images.length; navigateTo(prev); }}>‹</button>
  <button className="gallery-nav next" aria-label="Next image" onMouseDown={(e)=>e.preventDefault()} onClick={() => { const next = (mainIndex + 1) % images.length; navigateTo(next); }}>›</button>
        {/* Main display: image or video */}
  {images[mainIndex].match(/\.mp4(\?|$)/i) ? (
          <video
            ref={mainVideoRef}
            className={`gallery-main-img ${isFading ? 'fade-out' : ''}`}
            src={images[mainIndex]}
            controls
            playsInline
            muted
            preload="metadata"
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
          />
        ) : (
          <img className={`gallery-main-img ${isFading ? 'fade-out' : ''}`} src={images[mainIndex]} alt={`${alt} ${mainIndex + 1}`} loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
        )}
      </div>
      <div className="thumbnail-strip" style={{ display:'flex', gap:'.5rem', marginTop:'.75rem' }} aria-label="Thumbnail gallery">
        {images.map((src, i) => (
          <button
            ref={el => { thumbRefs.current[i] = el; }}
            key={src + i}
            onClick={() => {
              if (i === mainIndex) return;
              // unified navigate
              navigateTo(i);
            }}
            aria-label={`Show image ${i + 1}`}
            className={`thumbnail-btn ${i === mainIndex ? 'active' : ''}`}
          >
            {src.match(/\.mp4(\?|$)/i) ? (
              <div style={{ position:'relative', width:'100%', height:'100%' }}>
                <video src={src} muted playsInline preload="metadata" className="thumbnail-img" aria-hidden />
                <span className="thumb-play" aria-hidden>▶</span>
              </div>
            ) : (
              <img src={src} alt={`${alt} thumb ${i + 1}`} loading="lazy" className="thumbnail-img" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};



