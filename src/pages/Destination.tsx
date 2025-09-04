// src/pages/Destination.tsx
import React, { useState, useEffect } from 'react';
import data from '../data/data.json'; // Import data from local JSON
import './Destination.css'; // Destination-specific styles

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

  return (
    <section className="destination-page flow grid-container--destination">
      <h2 className="numbered-title fs-500 ff-sans-cond uppercase text-white">
        <span>01</span> Pick your destination
      </h2>

      <picture className="destination-image">
        <source srcSet={currentDestination.images.webp} type="image/webp" />
        <img src={currentDestination.images.png} alt={currentDestination.name} />
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