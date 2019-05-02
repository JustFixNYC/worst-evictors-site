import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/header-footer.scss';

import Header from './header'
import Footer from './footer'

          {/* General tags 
            <meta name="image" content={image} />
            <link rel="canonical" href={url} /> */}

            {/* OpenGraph tags 
            <meta property="og:url" content={url} />
            {isBlogPost ? <meta property="og:type" content="article" /> : null}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

            {/* Twitter Card tags 
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={seo.social.twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} /> */}

const Layout = ({ children }: Props) => (
      <>
        <Helmet
          title="NYC's Worst Evictors"
          meta={[
            { name: 'description', content: 'This website brings transparency to evictions, the landlords who benefit, and what you can do to fight back. We are here to fight with you. When you fight, we all win.' },
            { name: 'keywords', content: 'nyc, worst, evictions, evictors, rtc, right, to, counsel, tenant, organizing, landlord, map' },
            { property: 'og:url', content: 'www.worstevictorsnyc.org' },
            { property: 'og:title', content: 'Is your landlord on our worst evictors list and evictions map? Learn your rights here!' },
            { property: 'og:description', content: 'This website brings transparency to evictions, the landlords who benefit, and what you can do to fight back. We are here to fight with you. When you fight, we all win.' },
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
