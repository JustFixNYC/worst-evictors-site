import React from 'react';
import { Link } from 'gatsby';

import '../styles/header-footer.scss';
import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <header className="navbar footer">
    <section className="navbar-section"></section>
    <section className="navbar-center text-small px-2 pt-1">
        <span className="hide-md">Made with ♡ by <a href="https://www.righttocounselnyc.org/" target="_blank">Right to Counsel Coalition</a>, the <a href="https://www.antievictionmap.com/" target="_blank">Anti-Eviction Mapping Project</a>, and <a href="https://www.justfix.nyc/" target="_blank">JustFix.nyc</a></span>
        <span className="show-md">By <a href="https://www.righttocounselnyc.org/" target="_blank">RTC Coalition</a>, <a href="https://www.antievictionmap.com/" target="_blank">AEMP</a>, and <a href="https://www.justfix.nyc/" target="_blank">JustFix.nyc</a></span>
    </section>
    <section className="navbar-section">
      <Link className="btn btn-link" to="/about">About</Link>
      <a href="https://github.com/JustFixNYC/worst-evictors-site" className="btn btn-link"> <FaGithub className="icon" /></a>
    </section>
  </header>
)

export default Footer