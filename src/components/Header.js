import React from 'react';

function Header() {
  return (
    <header className="user-header">
      <nav className="user-info-container">
        <div className="user-info">
          <h1 className="user-name">ANDONII VLADA</h1>
          <p className="user-post">WEB DEVELOPER</p>
        </div>
        <ul className="navigation-list">
          <li className="navigation-item">
            <a className="navigation-link" href="#">ABOUT</a>
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="#">SKILLS</a>
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="#">EXPERIENCE</a>
          </li>
          <li className="navigation-item">
            <a className="navigation-link" href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
