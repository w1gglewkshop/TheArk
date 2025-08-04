import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('token'));
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    window.location.href = '/login';
  };

  return (
    <header className="header new-header">
      <div className="header-inner">
        <Link to="/" className="logo" style={{ fontFamily: 'cursive', fontWeight: 'bold', fontSize: 28, color: '#1a2e22', textDecoration: 'none' }}>
          The Ark
        </Link>
        <nav className="nav new-nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/adopt" className={location.pathname.startsWith('/adopt') ? 'active' : ''}>Adopt</Link>
          <Link to="/volunteer" className={location.pathname === '/volunteer' ? 'active' : ''}>Volunteer</Link>
          <Link to="/donate" className={location.pathname === '/donate' ? 'active' : ''}>Donate</Link>
          <Link to="/lost-found" className={location.pathname === '/lost-found' ? 'active' : ''}>Lost & Found</Link>
          <Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link>
          <Link to="/success" className={location.pathname === '/success' ? 'active' : ''}>Success</Link>
          <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
          <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Admin</Link>
        </nav>
        <div className="header-cta">
          {loggedIn ? (
            <button className="btn get-started" onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <Link to="/login" className="btn get-started">Login</Link>
              <Link to="/signup" className="btn contact-us">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 