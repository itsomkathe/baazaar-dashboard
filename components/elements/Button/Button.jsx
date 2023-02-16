import React from 'react'
import classes from './Button.module.css';

export default function Button({text, style, textStyle, onClick}) {
  return (
    <button onClick={onClick} style={style} className={classes.button}>
        <span style={textStyle} className={classes.text}>
            {text}
        </span>
    </button>
  )
}
