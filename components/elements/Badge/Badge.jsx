import React from 'react'
import classes from './Badge.module.css';

export default function Badge({text, style, textStyle}) {
  return (
    <div style={style} className={classes.container}>
        <span style={textStyle} className={classes.text}>
            {text}
        </span>
    </div>
  )
}