import React from "react";

import "../styles/footer.scss";
import { FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { OutboundLink } from "./outbound-link";
import { IconType } from "react-icons/lib/cjs";

const rtcLogo = require("../images/RTC_logo.png");

const SocialLink = (props: { href: string; icon: IconType; title: string }) => (
  <OutboundLink href={props.href} title={props.title} className="btn btn-link">
    <props.icon className="icon" />
  </OutboundLink>
);

const Footer = () => (
  <footer className="Footer">
    <img src={rtcLogo} alt="Right to Counsel logo" />
    <span>
      This resource is made &ldquo;by tenants for tenants&rdquo; and is
      maintained by the{" "}
      <OutboundLink href="https://www.righttocounselnyc.org/">
        Right to Counsel NYC Coalition
      </OutboundLink>
      .
      <br />
      <br />
      <OutboundLink href="https://docs.google.com/forms/d/e/1FAIpQLSfOwTTtRuCSb06_gYR7Zjjm-c0BWXzJlriJHRl8JwDVEnc-0g/viewform?usp=sf_link">
        Click here
      </OutboundLink>{" "}
      to provide feedback about the website.
    </span>
    <div className="Footer_JustFix col-ml-auto">
      <div>
        <SocialLink
          href="https://github.com/JustFixNYC/worst-evictors-site"
          title="Fork us on GitHub"
          icon={FaGithub}
        />
        <SocialLink
          href="https://www.facebook.com/RTCNY/"
          title="Visit us on Facebook"
          icon={FaFacebook}
        />
        <SocialLink
          href="https://twitter.com/rtcnyc"
          title="Follow us on Twitter"
          icon={FaTwitter}
        />
        <br className="show-lg" />
        <img
          aria-hidden
          src="https://www.netlify.com/img/global/badges/netlify-light.svg"
        />
      </div>
      Made with NYC ♥ by the team at{" "}
      <OutboundLink href="https://justfix.org">JustFix</OutboundLink> and the{" "}
      <span className="nobr">
        <OutboundLink href="https://antievictionmap.com/">
          Anti&#8209;Eviction Mapping Project
        </OutboundLink>
      </span>
      .
    </div>
  </footer>
);

export default Footer;
