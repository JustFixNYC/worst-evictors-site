import React from 'react';
import { Link } from 'gatsby';

import '../styles/header-footer.scss';

const Footer = () => (
  <header className="navbar footer">
    <section className="navbar-section"></section>
    <section className="navbar-center text-small">
        Made with ♡ by JustFix.nyc, Right to Counsel Coalition, and the Anti-Eviction Mapping Project
    </section>
    <section className="navbar-section">
      <Link activeClassName="active" className="btn btn-link" to="/about">About</Link>
      <a href="https://github.com/JustFixNYC/worst-evictors-site" className="btn btn-link">Source</a>
    </section>
  </header>
)

export default Footer