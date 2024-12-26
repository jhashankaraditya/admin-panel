import React from 'react'
import { groupNumber,ordersData } from "../../Data/Data"
import css from "./Orders.module.css"
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'

const Orders = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <div className={css.head}>
            <img src="https://logowik.com/content/uploads/images/direct-admin8214.logowik.com.webp" alt="Logo" />
            <span>Orders Today</span>
        </div>
        <div className={`${css.stat} grey-container`}>
            <span>Amount</span>
            <span>{groupNumber(3662)}</span>
        </div>

        <div className={css.orders}>{
            ordersData.map((order,index)=>(
                <div key={index} className={css.order}>
                    <div>
                        <span>{order.name}</span>
                        <span>{order.change}</span>
                    </div>
                    <div>
                        <span>{order.type}</span>
                        <span>{order.items}</span>
                    </div>
                </div>
            ))}
        </div>

        <div className={css.orderChart}>
            <span>Split By Orders</span>
            <OrdersPieChart/>
        </div>
    </div>
  )
}

export default Orders