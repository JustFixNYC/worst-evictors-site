import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

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
        <div>
          {children}
        </div>
        <Footer />
      </>
    )

export default Layout
