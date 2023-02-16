import React from 'react'
import classes from './Navbar.module.css';
import NavButton from '@components/elements/NavButton/NavButton';
import SVG from '@public/Icons/SVG';
import SVGComponent from '@utils/SVGComponent';
import { useRouter } from 'next/router';

const buttons = [
    {
        icon: "Grid",
        text: "Dashboard",
        isActive: true,
        url: "/"
    },
    {
        icon: "Shapes",
        text: "Listings",
        isActive: false,
        url: "/listings"
    },
    {
        icon: "List",
        text: "Orders",
        isActive: false,
        url: "/orders"
    },
    {
        icon: "Cash",
        text: "Payments",
        isActive: false,
        url: "/payments"
    },
    {
        icon: "Gift",
        text: "Offers",
        isActive: false,
        url: "/offers"
    },
    {
        icon: "Target",
        text: "Targets",
        isActive: false,
        url: "/targets"
    }
]

export default function Navbar() {
    const router = useRouter();

    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <h3 className={classes.title}>baazaar</h3>
                <h5 className={classes.subtitle}>seller</h5>
            </div>
            <div className={classes.buttons}>
                {
                    buttons.map((button, idx)=>(
                        <NavButton
                            key={idx}
                            text={button.text}
                            icon={button.icon}
                            isActive={router.pathname == button.url}
                            onClick={button.onClick}
                            url={button.url}
                        />
                    ))
                }
            </div>
            <div className={classes.logout}>
                <SVGComponent
                  svg={SVG["Logout"]}
                />
                <span className={classes.logoutText}>Log Out</span>
            </div>
        </div>
    )
}
