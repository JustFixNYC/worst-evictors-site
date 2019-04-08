import React from 'react';
import { Link } from 'gatsby';

import '../styles/header.scss';

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className="navbar">
    <section className="navbar-center">
    </section>
    <section className="navbar-section">
      <Link activeClassName="active" className="btn btn-link" to="/">Home</Link>
      <Link activeClassName="active" className="btn btn-link" to="/evictors-list">Worst Evictors List</Link>
      <Link activeClassName="active" className="btn btn-link" to="/map">Evictions Map</Link>
      <Link activeClassName="active" className="btn btn-link" to="/rights">My Rights</Link>
      <Link activeClassName="active" className="btn btn-link" to="/about">About</Link>
    </section>
  </header>
)

export default Header
