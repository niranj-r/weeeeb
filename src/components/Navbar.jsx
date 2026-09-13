import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="main-navigation">
      <div className="container">
        <Link to="/" className="brand-logo">
          <h2>HASH'26</h2>
        </Link>
        <nav>
          <ul className="nav-menu">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/events" className="nav-item">Events</Link></li>
            <li><Link to="/gallery" className="nav-item">Gallery</Link></li>
            <li><Link to="/contact" className="nav-item">Contact</Link></li>
            <li><Link to="/register" className="nav-item">Register</Link></li>
            <li>
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
