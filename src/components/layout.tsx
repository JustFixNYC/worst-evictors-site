import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/header-footer.scss'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }: Props, isCitywideList?: boolean) => (
      <>
        <Helmet>
          <html lang="en" />
          <title>{isCitywideList ? "NYC's Top 20 Worst Evictors in 2018" : "NYC's Worst Evictors"}</title>
          <meta name="description" content="This website brings transparency to evictions, the landlords who benefit, and what you can do to fight back. We are here to fight with you. When you fight, we all win." />
          <meta name="keywords" content="nyc, worst, evictions, evictors, rtc, right, to, counsel, tenant, organizing, landlord, map" />
          <meta name="author" content="Right to Counsel Coalition, JustFix.nyc, and the Anti-Eviction Mapping Project" />

          <meta property="fb:app_id" content="247990609143668" />
          <meta property="og:site_name" content="NYC's Worst Evictors" />
          <meta property="og:title" content={isCitywideList ? "NYC's Top 20 Worst Evictors in 2018" : "These NYC landlords use evictions to displace people. We are fighting back."} />
          <meta property="og:description" content="This website brings transparency to evictions, the landlords who benefit, and what you can do to fight back. We are here to fight with you. When you fight, we all win." />
          <meta property="og:url" content={isCitywideList ? "https://www.worstevictorsnyc.org/evictors-list/citywide" : "https://www.worstevictorsnyc.org"} />
          <meta property="og:image" content={isCitywideList ? "https://i.imgur.com/NiEQZ6x.png" : "https://i.imgur.com/RkMxfbS.png"} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@RTCNYC" />
          <meta name="twitter:creator" content="@RTCNYC" />
          <meta name="twitter:title" content={isCitywideList ? "NYC's Top 20 Worst Evictors in 2018" : "These NYC landlords use evictions to displace people. We are fighting back."}  />
          <meta name="twitter:description" content="This website brings transparency to evictions, the landlords who benefit, and what you can do to fight back. We are here to fight with you. When you fight, we all win." />
          <meta name="twitter:url" content={isCitywideList ? "https://www.worstevictorsnyc.org/evictors-list/citywide" : "https://www.worstevictorsnyc.org"} />
          <meta name="twitter:image" content={isCitywideList ? "https://i.imgur.com/NiEQZ6x.png" : "https://i.imgur.com/RkMxfbS.png"} />
          <meta name="twitter:image:alt" content="NYC's Worst Evictors" />
        </Helmet>
        <Header />
        <div className="page-content">
          {children}
        </div>
        <Footer />
      </>
    )

export default Layout
