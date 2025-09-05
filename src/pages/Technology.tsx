
import React, { useState, useEffect } from 'react';
import data from '../data/data.json';
import './Technology.css';


const getTechnologyImageSrc = (imageFileName: string) => {
  try {
    // Glob pattern to match all jpg images in the technology assets folder
    const images = import.meta.glob('../assets/technology/*.jpg', { eager: true, as: 'url' });
    const fullPath = `../assets/technology/${imageFileName}`;
    return images[fullPath] || ''; // Return the URL or empty string if not found
  } catch (error) {
    console.error(`Failed to load technology image ${imageFileName}:`, error);
    return '';
  }
};


const TechnologyPage: React.FC = () => {
  const [selectedTechIndex, setSelectedTechIndex] = useState(0);
  const technology = data.technology;
  const currentTech = technology[selectedTechIndex];

  // Effect to manage body background class
  useEffect(() => {
    document.body.classList.add('technology-background');
    return () => {
      document.body.classList.remove('technology-background');
    };
  }, []);

  // Dynamically get image URLs for portrait and landscape
  const portraitSrc = getTechnologyImageSrc(currentTech.images.portrait);
  const landscapeSrc = getTechnologyImageSrc(currentTech.images.landscape);


  return (
    <section className="technology-page flow grid-container--technology">
      <h2 className="numbered-title fs-500 ff-sans-cond uppercase text-white">
        <span>03</span> Space launch 101
      </h2>

      <div className="numbered-indicators flex" role="tablist" aria-label="technology selection">
        {technology.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === selectedTechIndex ? 'true' : 'false'}
            className={index === selectedTechIndex ? 'active ff-serif fs-600 text-white' : 'ff-serif fs-600 text-white'}
            tabIndex={index === selectedTechIndex ? 0 : -1}
            onClick={() => setSelectedTechIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <article className="tech-info flow">
        <h3 className="fs-200 ff-sans-cond uppercase text-light">The terminology...</h3>
        <h4 className="fs-700 ff-serif uppercase text-white">{currentTech.name}</h4>
        <p className="bio text-light">{currentTech.description}</p>
      </article>

      <picture className="tech-image">
        {/* Landscape for mobile/tablet */}
        <source media="(max-width: 44.999em)" srcSet={landscapeSrc} />
        {/* Portrait for desktop */}
        <source media="(min-width: 45em)" srcSet={portraitSrc} />
        <img src={landscapeSrc} alt={currentTech.name} /> {/* Fallback */}
      </picture>
    </section>
  );
};

export default TechnologyPage;