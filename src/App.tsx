
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import data from './data/data.json';
import HomePage from './pages/Home';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew';
import TechnologyPage from './pages/Technology'; 

import './App.css'; // Main App styles

function App() {
  console.log(data);

  return (
    <div className="App">
      <Header />

      <main id="main" className="grid-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;