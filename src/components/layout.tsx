import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/header-footer.scss'

import Header from './header'
import Footer from './footer'

type Props = {
  children: React.ReactNode,
  customTitle?: string,
  customUrl?: string,
  customImage?: string
}

const Layout = ({ children, customTitle, customUrl, customImage }: Props) => {
  console.log(customTitle);
  const title = (customTitle || "NYC's Worst Evictors");
  const description = "This website brings transparency to evictions, the landlords who benefit, and what you can do to fight back. We are here to fight with you. When you fight, we all win.";
  const url = customUrl || "https://www.worstevictorsnyc.org";
  const shareImageURL = customUrl || "https://i.imgur.com/RkMxfbS.png"; 

  return (
      <>
        <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: "nyc, worst, evictions, evictors, rtc, right, to, counsel, tenant, organizing, landlord, map" },
          { name: 'author', content: "Right to Counsel Coalition, JustFix.nyc, and the Anti-Eviction Mapping Project"},

          { property: 'og:site_name', content: title },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description},
          { property: 'og:image', content: shareImageURL},
          { property: 'og:type', content: 'website'},
          { property: 'fb:app_id', content: "247990609143668"},

          { name: 'twitter:card', content: 'summary_large_image'},
          { name: 'twitter:site', content: "@RTCNYC" },
          { name: 'twitter:creator', content: "@RTCNYC" },
          { name: 'twitter:title', content: title},
          { name: 'twitter:description', content: description},
          { name: 'twitter:url', content: url},
          { name: 'twitter:image', content: shareImageURL },
          { name: 'twitter:image:alt', content: "NYC's Worst Evictors"}
        ]}>
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="page-content">
          {children}
        </div>
        <Footer />
      </>
  )
}

export default Layout
