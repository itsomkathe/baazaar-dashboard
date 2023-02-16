import React from 'react'
import InsightBox from '@components/elements/InsightBox/InsightBox'
import classes from './Insights.module.css';

const Insights1 = [
  {
    heading: "Orders",
    title: 3224,
    icon: "Tick"
  },
  {
    heading: "Accepted",
    title: 1987,
    icon: "Tick"
  },
  {
    heading: "Products",
    title: 3224,
    icon: "Tick"
  },
  {
    heading: "Categories",
    title: 1987,
    icon: "Tick"
  },
];

const Insights2 = [
  {
    heading: "In-Transit",
    title: 12,
    icon: "Loop"
  },
  {
    heading: "Delivered",
    title: 12,
    icon: "Loop"
  },
  {
    heading: "Retailers",
    title: 843,
    icon: "Loop"
  },
  {
    heading: "Pincodes",
    title: 12,
    icon: "Loop"
  },
];

export default function () {
  return (
    <div className={classes.container}>
        <div className={classes.grid1}>
          {
            Insights1.map((val, idx)=>{
              return <InsightBox
                key={idx}
                title={val.title}
                heading={val.heading}
                icon={val.icon}
              />
            })
          }
        </div>
        
        <div className={classes.grid2}>
          {
            Insights2.map((val, idx)=>{
              return <InsightBox
                key={idx}
                title={val.title}
                heading={val.heading}
                icon={val.icon}
              />
            })
          }
        </div>
    </div>
  )
}
