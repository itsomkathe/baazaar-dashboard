import React from 'react'
import classes from './CompanyTitle.module.css';
import Image from 'next/image';
import rageLogo from '@public/Icons/rage-coffee.png'
import plus from '@public/Icons/plus.svg'
import bell from '@public/Icons/bell.svg'
import settings from '@public/Icons/settings.svg'
import TitleButton from '@components/elements/TitleButton/TitleButton';

export default function CompanyTitle() {
  return (
    <div className={classes.titleContainer}>
        <div className={classes.leftWrapper}>
            <div className={classes.logoWrapper}>
                <Image
                    src={rageLogo}
                    className={classes.logo}
                    alt="logo"
                />
            </div>
            <h1 className={classes.title}>Rage Coffee</h1>
        </div>
        <div className={classes.rightWrapper}>
            <TitleButton icon={"Plus"}/>
            <TitleButton icon={"Bell"}/>
            <TitleButton icon={"Settings"}/>
        </div>

    </div>
  )
}
