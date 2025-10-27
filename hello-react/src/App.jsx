// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'; // 1. Import useState
import { ThemeContext } from './contexts/ThemeContext'; // 2. Import your new context

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserDetailsPage from './pages/UserDetailsPage';
import './App.css'; // We will add dark mode styles here

function App() {
  // 3. Create the theme state
  const [theme, setTheme] = useState('light');

  // 4. Create a function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    // 5. Wrap your app in the Provider
    // The 'value' prop is an object containing the data you want to share
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      {/* 6. Use the 'theme' state to add a class to your main div */}
      <div className={`App ${theme}`}>
        <Navbar />
        <div className="page-content" style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/users/:id" element={<UserDetailsPage />} />
          </Routes>
        </div>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;