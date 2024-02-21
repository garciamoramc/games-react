import React from 'react';
import { Link } from 'react-router-dom';

function AppCover() {
  return (
    <div className="app-cover">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/memotest">Memotest</Link></li>
          <li><Link to="/wpm">WPM</Link></li>
          <li><Link to="/pokemon">Pokemon</Link></li>
        </ul>
      </nav>

      <div className="cover-content">
        <h1>Welcome to our Mini Games Hub</h1>
        <p>Discover a variety of mini games created with React and with the goal of working <a href='https://reactrouter.com/en/main'>React Router</a>.</p>
        <p>Explore the different games and have fun!</p>
      </div>
    </div>
  );
}

export default AppCover;
