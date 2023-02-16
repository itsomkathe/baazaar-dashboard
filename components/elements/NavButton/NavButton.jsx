import React from 'react';
import Image from 'next/image';
import classes from './NavButton.module.css';
import SVG from '@public/Icons/SVG';
import SVGComponent from '@utils/SVGComponent';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavButton({ icon, isActive, text, onClick, url }) {
    
	return (
		<Link href={url}>
			<div onClick={onClick} className={classes.container}>
				{isActive && <div className={classes.vertical}></div>}
				<div className={isActive ? classes.iconWrapper : classes.iconWrapperInactive}>
					<SVGComponent svg={SVG[icon]} />
				</div>
				<p className={isActive ? classes.text: classes.textInactive}>{text}</p>
			</div>
		</Link>
	);
}
