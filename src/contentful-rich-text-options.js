import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

const contentfulOptions = {
  renderMark: {
    [MARKS.UNDERLINE]: text => <span>{text}</span>
  }
};

export default contentfulOptions;