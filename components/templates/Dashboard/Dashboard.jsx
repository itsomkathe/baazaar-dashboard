import React from 'react'
import Insights from '@components/modules/Insights/Insights';
import Button from '@components/elements/Button/Button';
import NewOrders from '@components/modules/NewOrders/NewOrders';
import Navbar from '@components/modules/Navbar/Navbar';
import CompanyTitle from '@components/modules/CompanyTitle/CompanyTitle';
import classes from './Dashboard.module.css';

export default function Dashboard() {
  return (
      <div className="container">
        <div className="navWrapper">
          <Navbar/>
        </div>
        <div className="contentWrapper">
          <CompanyTitle/>
          <Insights/>
          <div className={classes.titleWrapper}>
            <h1 className={classes.title}>New Orders</h1>
            <Button
              text={"View All"}
            />
          </div>
          <NewOrders/>
        </div>
      </div>
  )
}
