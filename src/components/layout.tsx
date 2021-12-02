import React from "react";
import Helmet from "react-helmet";

import "../styles/header-footer.scss";

import Header from "./header";
import Footer from "./footer";

type Props = {
  children: React.ReactNode;
  customTitle?: string;
  customUrl?: string;
  customImage?: string;
  className?: string;
};

const Layout = ({
  children,
  customTitle,
  customUrl,
  customImage,
  className
}: Props) => {
  const title = customTitle || "NYC's Worst Evictors";
  const description =
    "This website brings transparency to evictions, the landlords who benefit, and what you can do to fight back. We are here to fight with you. When you fight, we all win.";
  const url = customUrl || "https://www.worstevictorsnyc.org";
  const shareImageURL = customImage || "https://i.imgur.com/RkMxfbS.png";

  return (
    <div className={className}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="nyc, worst, evictions, evictors, rtc, right, to, counsel, tenant, organizing, landlord, map"
        />
        <meta
          name="author"
          content="Right to Counsel Coalition, JustFix.nyc, and the Anti-Eviction Mapping Project"
        />

        <meta property="fb:app_id" content="247990609143668" />
        <meta property="og:site_name" content="NYC's Worst Evictors" />
        <meta
          property="og:title"
          content={
            title !== "NYC's Worst Evictors"
              ? title
              : "These NYC landlords use evictions to displace people. We are fighting back."
          }
        />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={shareImageURL} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RTCNYC" />
        <meta name="twitter:creator" content="@RTCNYC" />
        <meta
          name="twitter:title"
          content={
            title !== "NYC's Worst Evictors"
              ? title
              : "These NYC landlords use evictions to displace people. We are fighting back."
          }
        />
        <meta
          name="twitter:description"
          content="This website brings transparency to evictions, the landlords who benefit, and what you can do to fight back. We are here to fight with you. When you fight, we all win."
        />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:image" content={shareImageURL} />
        <meta name="twitter:image:alt" content="NYC's Worst Evictors" />
      </Helmet>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
