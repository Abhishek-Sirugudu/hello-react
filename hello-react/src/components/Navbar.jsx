// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    padding: '1rem',
    backgroundColor: '#f4f4f4',
    borderBottom: '1px solid #ddd'
  };

  const linkStyle = {
    marginRight: '1rem',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
    </nav>
  );
}

export default Navbar;