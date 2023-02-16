import React from 'react'
import classes from './InsightBox.module.css';
import Image from 'next/image';
import tick from '@public/Icons/tick.svg';
import loop from '@public/Icons/loop.svg';
import SVG from '@public/Icons/SVG';
import SVGComponent from '@utils/SVGComponent';

export default function InsightBox({title, heading, icon, style}) {
  return (
    <div className={classes.cardContainer} style={style ? style : null}>
        <div className={icon === "Tick" ? classes.imageWrapperBlue: classes.imageWrapperPink}>
            <SVGComponent
              svg={SVG[icon]}
            />
        </div>
        
        <div className={classes.textWrapper}>
            <p className={classes.heading}>{heading}</p>
            <h3 className={classes.title}>{title}</h3>
        </div>
    </div>
  )
}
