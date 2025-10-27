// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useContext } from 'react'; // 1. Import useContext
import { ThemeContext } from '../contexts/ThemeContext'; // 2. Import the context

function Navbar() {
  // 3. Consume the context and get the values you need
  const { toggleTheme } = useContext(ThemeContext);

  const navStyle = {
    padding: '1rem',
    borderBottom: '1px solid',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const linkStyle = {
    marginRight: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </div>

      {/* 4. Add the toggle button */}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default Navbar;