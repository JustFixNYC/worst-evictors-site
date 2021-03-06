import React from 'react';
import { Link } from 'gatsby';

import '../styles/header-footer.scss';

import favicon from '../images/favicon.png';

type Props = {
  siteTitle: string
}

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      isDropdownVisible: false,
      isListDropdownVisible: false
    }
    
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleListDropdown = this.toggleListDropdown.bind(this);
  }
  
  toggleDropdown() {
    this.setState({
      isDropdownVisible: !this.state.isDropdownVisible
    })
  }

  toggleListDropdown() {
    this.setState({
      isListDropdownVisible: !this.state.isListDropdownVisible
    })
  }
  
  render() {
    return (
      <header className="navbar header p-fixed">
        <div className="navbar-section website-title">
          <Link to="/">
            <img src={favicon} />
            <span>
              NYC's Worst Evictors
            </span>
          </Link>
        </div>
        <section className="navbar-center"></section>
        <section className="navbar-section hide-md">
          <Link activeClassName="active" className="btn btn-link" to="/">Home</Link>
          <Link activeClassName="active" className="btn btn-link" to="/evictors-list/citywide">Worst Evictors List</Link>
          <Link activeClassName="active" className="btn btn-link" to="/map">Evictions Map</Link>
          <Link activeClassName="active" className="btn btn-link" to="/rights">My Rights</Link>
          <Link activeClassName="active" className="btn btn-link" to="/about">About</Link>
        </section>
        <div className="dropdown dropdown-right show-md">
          <a className={"btn btn-link dropdown-toggle m-2" + (this.state.isDropdownVisible ? " active" : "")}
          onClick={this.toggleDropdown} tabIndex="0">
            <i className={"icon " + (this.state.isDropdownVisible ? "icon-cross" : "icon-menu")}></i>
          </a>
          <ul className={"menu menu-reverse " + (this.state.isDropdownVisible ? "d-block" : "d-none")}>
            <li className="menu-item">
              <Link activeClassName="active" className="btn btn-link" to="/">Home</Link>
            </li>
            <li className="menu-item">
              <Link activeClassName="active" className="btn btn-link" to="/evictors-list/citywide">Worst Evictors List</Link>
            </li>
            <li className="menu-item">
              <Link activeClassName="active" className="btn btn-link" to="/map">Evictions Map</Link>
            </li>
            <li className="menu-item">
              <Link activeClassName="active" className="btn btn-link" to="/rights">My Rights</Link>
            </li>
            <li className="menu-item">  
              <Link activeClassName="active" className="btn btn-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}


export default Header
