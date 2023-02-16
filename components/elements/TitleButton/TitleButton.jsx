import React from 'react'
import Image from 'next/image';
import classes from './TitleButton.module.css';
import  Plus from '@public/Icons/plus.svg';
import SVG from '@public/Icons/SVG';
import SVGComponent from '@utils/SVGComponent';

export default function TitleButton({icon}) {
  return (
    <div className={classes.iconWrapper}>
        <SVGComponent
          svg={SVG[icon]}
        />
    </div>
  )
}
