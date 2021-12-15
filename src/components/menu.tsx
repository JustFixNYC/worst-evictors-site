import React, { useState } from "react";
import { Link } from "gatsby";

import "../styles/menu.scss";
import FocusTrap from "focus-trap-react";

const NavMenu = () => {
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const toggleMenu = () => setMenuVisibility(!isMenuVisible);

  return (
    <div className="navbar text-primary">
      <button
        className={
          "btn btn-secondary dropdown-toggle" + (isMenuVisible ? " d-none" : "")
        }
        onClick={toggleMenu}
        tabIndex={0}
      >
        Menu
      </button>

      {isMenuVisible && (
        <FocusTrap
          active={isMenuVisible}
          focusTrapOptions={{
            onDeactivate: toggleMenu
          }}
        >
          <ul
            className={
              "menu bg-secondary " + (isMenuVisible ? "d-flex" : "d-none")
            }
            onClick={toggleMenu}
          >
            <button
              className="dropdown-toggle"
              aria-label="Press Escape Key to close menu"
            >
              ✕
            </button>

            <Link activeClassName="active" to="/">
              <li className="menu-item">Home</li>
            </Link>
            <Link activeClassName="active" to="/list">
              <li className="menu-item">Worst Evictors List</li>
            </Link>
            <Link activeClassName="active" to="/map">
              <li className="menu-item">Worst Evictors Map</li>
            </Link>
            <Link activeClassName="active" to="/#rights">
              <li className="menu-item">My Rights</li>
            </Link>
            <Link activeClassName="active" to="/about">
              <li className="menu-item">About</li>
            </Link>
            <Link activeClassName="active" to="/methodology">
              <li className="menu-item">Methodology</li>
            </Link>
            <Link activeClassName="active" to="/archive">
              <li className="menu-item">Archive</li>
            </Link>
          </ul>
        </FocusTrap>
      )}
    </div>
  );
};

export default NavMenu;
