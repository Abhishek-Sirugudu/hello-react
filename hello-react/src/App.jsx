// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 1. The Navbar is *outside* the <Routes>, so it stays on every page */}
      <Navbar />

      <div className="page-content" style={{ padding: '1rem' }}>
        {/* 2. <Routes> is the container for all your page definitions */}
        <Routes>
          {/* 3. A <Route> defines a URL path and the component to render */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;