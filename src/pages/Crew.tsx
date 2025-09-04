// src/pages/Crew.tsx
import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import './Crew.css';

const CrewPage: React.FC = () => {
  const [selectedCrewIndex, setSelectedCrewIndex] = useState(0);
  const crew = data.crew;
  const currentCrewMember = crew[selectedCrewIndex];

  // Effect to manage body background class
  useEffect(() => {
    document.body.classList.add('crew-background');
    return () => {
      document.body.classList.remove('crew-background');
    };
  }, []);

  return (
    <section className="crew-page flow grid-container--crew">
      <h2 className="numbered-title fs-500 ff-sans-cond uppercase text-white">
        <span>02</span> Meet your crew
      </h2>

      <div className="crew-image-container">
        <img src={currentCrewMember.images.png} alt={currentCrewMember.name} className="crew-image" />
        <div className="image-separator"></div> {/* Horizontal line for mobile/tablet */}
      </div>


      <div className="dot-indicators flex" role="tablist" aria-label="crew member list">
        {crew.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === selectedCrewIndex ? 'true' : 'false'}
            className={index === selectedCrewIndex ? 'active' : ''}
            tabIndex={index === selectedCrewIndex ? 0 : -1}
            onClick={() => setSelectedCrewIndex(index)}
          >
            <span className="sr-only">The {_.role} {_.name}</span>
          </button>
        ))}
      </div>

      <article className="crew-info flow">
        <h3 className="fs-600 ff-serif uppercase text-white role">{currentCrewMember.role}</h3>
        <h4 className="fs-700 ff-serif uppercase text-white name">{currentCrewMember.name}</h4>
        <p className="bio text-light">{currentCrewMember.bio}</p>
      </article>
    </section>
  );
};

export default CrewPage;