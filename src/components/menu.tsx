import React from "react";
import { Link } from "gatsby";

import "../styles/menu.scss";
import FocusTrap from "focus-trap-react";

type Props = {};

type State = {
  isDropdownVisible: boolean;
  isListDropdownVisible: boolean;
};

class NavMenu extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownVisible: false,
      isListDropdownVisible: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleListDropdown = this.toggleListDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState({
      isDropdownVisible: !this.state.isDropdownVisible
    });
  }

  toggleListDropdown() {
    this.setState({
      isListDropdownVisible: !this.state.isListDropdownVisible
    });
  }

  render() {
    return (
      <div className="navbar text-primary">
        <button
          className={
            "btn btn-secondary dropdown-toggle" +
            (this.state.isDropdownVisible ? " active" : "")
          }
          onClick={this.toggleDropdown}
          tabIndex={0}
        >
          Menu
        </button>

        {this.state.isDropdownVisible && (
          <FocusTrap
            focusTrapOptions={{
              clickOutsideDeactivates: true,
              onDeactivate: () => this.toggleDropdown()
            }}
          >
            <ul
              className={
                "menu bg-secondary " +
                (this.state.isDropdownVisible ? "d-flex" : "d-none")
              }
              onClick={this.toggleDropdown}
            >
              <button className="dropdown-toggle">✕</button>

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
  }
}

export default NavMenu;
