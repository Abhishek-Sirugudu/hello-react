// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserDetailsPage from './pages/UserDetailsPage'; // 1. Import the new page
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="page-content" style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* 2. Add the dynamic route. The :id part is the parameter. */}
          <Route path="/users/:id" element={<UserDetailsPage />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;