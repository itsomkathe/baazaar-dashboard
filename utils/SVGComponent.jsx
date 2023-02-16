import React from 'react'

export default function SVGComponent({ svg, className, style }) {
  return (
    React.createElement(svg, {style, className})
  )
}