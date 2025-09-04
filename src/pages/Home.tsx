// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Keep this CSS file for Home-specific styles

const HomePage: React.FC = () => {
  return (
    <section className="home-page flow">
      <div className="home-content text-light ff-sans-normal">
        <h1 className="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">
          So, you want to travel to
          <span className="d-block fs-900 ff-serif text-white">Space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div className="explore-button">
        <Link to="/destination" className="large-button uppercase ff-serif text-dark bg-white">
          Explore
        </Link>
      </div>
    </section>
  );
};

export default HomePage;