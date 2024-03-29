import React from "react";
import Helmet from "react-helmet";

import "../styles/menu.scss";

import Footer from "./footer";
import NavMenu from "./menu";

type Props = {
  children: React.ReactNode;
  customTitle?: string;
  customDescription?: string;
  customUrl?: string;
  customImage?: string;
  className?: string;
  hideScrollArrow?: boolean;
};

const ScrollArrow = () => (
  <div aria-hidden className="scroll-arrow bounce-up-and-down text-secondary">
    <span>↓</span> <span className="hide-lg">↓</span>
  </div>
);

const GOOGLE_SITE_VERIFICATION_CODE =
  "-q5dreY6DgZQyoLddmn5nWlr_zAbobvRgbC6SnX90l8";

const Layout = ({
  children,
  customTitle,
  customDescription,
  customUrl,
  customImage,
  className,
  hideScrollArrow
}: Props) => {
  const title = customTitle || "NYC's Worst Evictors during COVID";
  const altTitle =
    "These NYC landlords are trying to evict tenants during the COVID-19 pandemic. We are fighting back.";
  const description =
    customDescription ||
    "Never-before-seen data from NYC Housing Court highlights who stands to benefit the most if and when evictions move forward during COVID-19.";
  const url = customUrl || "https://www.worstevictorsnyc.org";
  const shareImageURL = customImage || "https://i.imgur.com/W7aKkoX.png";

  return (
    <div className={className}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta
          name="google-site-verification"
          content={GOOGLE_SITE_VERIFICATION_CODE}
        />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="nyc, worst, evictions, evictors, lawsuits, cases, rtc, right, to, counsel, tenant, organizing, landlord, map, covid, covid-19, housing court, eviction filings"
        />
        <meta
          name="author"
          content="Right to Counsel Coalition, JustFix, and the Anti-Eviction Mapping Project"
        />

        <meta property="fb:app_id" content="247990609143668" />
        <meta property="og:site_name" content="NYC's Worst COVID Evictors" />
        <meta
          property="og:title"
          content={title !== "NYC's Worst COVID Evictors" ? title : altTitle}
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
          content={title !== "NYC's Worst COVID Evictors" ? title : altTitle}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:image" content={shareImageURL} />
        <meta name="twitter:image:alt" content="NYC's Worst COVID Evictors" />
      </Helmet>
      <NavMenu />
      <div className="page-content">
        {!hideScrollArrow && <ScrollArrow />}
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
