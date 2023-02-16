import React from 'react'
import Image from 'next/image';
import Badge from '../Badge/Badge';
import classes from './OrderCard.module.css';

export default function OrderCard({ orderId, date, time, isNew, itemCount, images, amount, style }) {

    const imgToDisplay = images?.slice(0, 5);

    return(
        <div style={style} className={classes.container}>
            <div className={classes.row1}>
                <div className={classes.orderWrapper}>
                    <h5 className={classes.order}>Order</h5>
                    <h6 className={classes.orderNumber}>{orderId}</h6>
                </div>
                <div>
                    {isNew && <Badge
                        text={"New"}
                    />}
                </div>
            </div>
            <div className={classes.row2}>
                <span className={classes.dateTime}>{date}</span>
                <div className={classes.line}></div>
                <span className={classes.dateTime}>{time}</span>
            </div>
            <div className={classes.row3}>
                <div className={classes.itemCount}>
                    <span className={classes.items}>Items</span>
                    <h3 className={classes.count}>{itemCount}</h3>
                </div>
                <div className={classes.imageContainer}>
                    {
                        imgToDisplay.map((img, idx)=>(
                            <Image
                                src={img}
                                className={classes.image}
                                key={idx}
                                alt="productImage"
                            />
                        ))
                    }
                    {(images?.length > 6) && 
                    <div className={classes.extraImages}>
                        <span>+41</span>
                    </div>}
                </div>
            </div>
            <div className={classes.row4}>
                <p className={classes.amountText}>Total Amount</p>
                <p className={classes.amount}>₹ {amount}</p>
            </div>
        </div>
    )   
}   
