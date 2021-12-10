import React from "react";
import { MARKS, INLINES } from "@contentful/rich-text-types";

const contentfulOptions = {
  renderMark: {
    [MARKS.UNDERLINE]: text => <span>{text}</span>
  },
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => (
      <a href={data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
};

export default contentfulOptions;
