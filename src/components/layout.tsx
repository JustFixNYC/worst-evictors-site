import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/header-footer.scss';

import Header from './header'
import Footer from './footer'

const Layout = ({ children }: Props) => (
      <>
        <Helmet
          title="NYC Worst Evictors"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="page-content">
          {children}
        </div>
        <Footer />
      </>
    )

export default Layout
