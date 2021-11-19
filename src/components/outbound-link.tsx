import React from "react";

type OutboundLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const OutboundLink = (props: OutboundLinkProps) => (
  <a {...props} target="_blank" rel="nofollow noopener">
    {props.children}
  </a>
);
