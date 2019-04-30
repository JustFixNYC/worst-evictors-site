import React from 'react'
import { MARKS } from '@contentful/rich-text-types'

const contentfulOptions = {
  renderMark: {
    [MARKS.UNDERLINE]: text => <span>{text}</span>
  }
};

export default contentfulOptions;