// src/App.tsx

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import data from './data/data.json';
import HomePage from './pages/Home';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew'; // Import the CrewPage component

import './App.css'; // Main App styles

// Placeholder component for Technology page
const TechnologyPage = () => <div className="flow text-white page-content"><h2>03 Space launch 101</h2><p>Technology content here.</p></div>;


function App() {
  console.log(data);

  return (
    <div className="App">
      <Header />

      <main id="main" className="grid-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} /> {/* Use the actual CrewPage */}
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;