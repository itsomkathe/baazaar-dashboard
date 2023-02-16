import React from 'react';
import OrderCard from '@components/elements/OrderCard/OrderCard';
import classes from './NewOrders.module.css';
import jordan from '@public/Images/jordan.jpeg';

const orders = [
    {
        orderId: "#1209231032349",
        date: "22/7/22",
        time: "3:30PM",
        isNew: true,
        itemCount: 23,
        images: [jordan, jordan, jordan, jordan, jordan, jordan, jordan, jordan, jordan],
        amount: "1,22,200",
    },
    {
        orderId: "#1209231032349",
        date: "22/7/22",
        time: "1:30PM",
        isNew: true,
        itemCount: 12,
        images: [jordan, jordan],
        amount: "52,100",
    },
];

export default function NewOrders() {
    return (
        <div className={classes.container}>
            {
                orders.map((order, idx)=>(
                    <OrderCard
                        orderId={order.orderId}
                        date={order.date}
                        time={order.time}
                        isNew={order.isNew}
                        itemCount={order.itemCount}
                        images={order.images}
                        amount={order.amount}
                        key={idx}
                        style={{width: "38rem"}}
                    />
                ))
            }
        </div>
    );
}
