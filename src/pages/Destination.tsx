
import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import './Destination.css';

// Helper function to dynamically import images for destinations
// This tells Vite to process these images and provide a URL
const getDestinationImageSrc = (imageFileName: string, type: 'png' | 'webp') => {
  try {
    // Vite's import.meta.glob is powerful for dynamic imports
    // It will return an object like {'./image-moon.png': () => import('/src/assets/destination/image-moon.png')}
    const images = import.meta.glob('../assets/destination/*.{png,webp}', { eager: true, as: 'url' });
    const fullPath = `../assets/destination/${imageFileName}`;
    return images[fullPath] || ''; // Return the URL or empty string if not found
  } catch (error) {
    console.error(`Failed to load destination image ${imageFileName}:`, error);
    return '';
  }
};


const DestinationPage: React.FC = () => {
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);
  const destinations = data.destinations;
  const currentDestination = destinations[selectedDestinationIndex];

  // Effect to manage body background class
  useEffect(() => {
    document.body.classList.add('destination-background');
    return () => {
      document.body.classList.remove('destination-background');
    };
  }, []);

  // Dynamically get image URLs
  const pngSrc = getDestinationImageSrc(currentDestination.images.png, 'png');
  const webpSrc = getDestinationImageSrc(currentDestination.images.webp, 'webp');


  return (
    <section className="destination-page flow grid-container--destination">
      <h2 className="numbered-title fs-500 ff-sans-cond uppercase text-white">
        <span>01</span> Pick your destination
      </h2>

      <picture className="destination-image">
        <source srcSet={webpSrc} type="image/webp" />
        <img src={pngSrc} alt={currentDestination.name} />
      </picture>

      <div className="tab-list underline-indicators flex ff-sans-cond text-light" role="tablist" aria-label="destination list">
        {destinations.map((destination, index) => (
          <button
            key={destination.name}
            role="tab"
            aria-selected={index === selectedDestinationIndex ? 'true' : 'false'}
            className={index === selectedDestinationIndex ? 'uppercase text-white active' : 'uppercase'}
            tabIndex={index === selectedDestinationIndex ? 0 : -1}
            onClick={() => setSelectedDestinationIndex(index)}
          >
            {destination.name}
          </button>
        ))}
      </div>

      <article className="destination-info flow">
        <h3 className="fs-800 ff-serif uppercase text-white">{currentDestination.name}</h3>
        <p className="text-light">{currentDestination.description}</p>
        <div className="destination-meta flex">
          <div className="flow" style={{ '--flow-space': '0.75rem' } as React.CSSProperties}>
            <h4 className="fs-200 ff-sans-cond uppercase letter-spacing-3">Avg. distance</h4>
            <p className="fs-500 ff-serif uppercase text-white">{currentDestination.distance}</p>
          </div>
          <div className="flow" style={{ '--flow-space': '0.75rem' } as React.CSSProperties}>
            <h4 className="fs-200 ff-sans-cond uppercase letter-spacing-3">Est. travel time</h4>
            <p className="fs-500 ff-serif uppercase text-white">{currentDestination.travel}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DestinationPage;