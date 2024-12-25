import React from 'react'
import css from './Layout.module.css'
import moment from 'moment/moment'
import Sidebar from '../Sidebar/Sidebar'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
const Layout = () => {
  const {pathName} = useLocation();
  return (
    <div className={css.container}>
        <Sidebar/>
        {pathName === '/' && <Navigate to="/dashboard" /> }
        <div className={css.dashboard}>
            <div className={css.topBaseGradient}>
                <div className="gradient-red"></div>
                <div className="gradient-orange"></div>
                <div className="gradient-blue"></div>
            </div>
            <div className={css.header}>
                <span>{moment().format(("dddd, DD MMM YYYY"))}</span>

                <div className={css.profile}>
                  <img src="https://img.freepik.com/free-vector/smiling-young-man-hoodie_1308-176157.jpg?semt=ais_hybrid" alt="" />
                  <div className={css.details}>
                    <span>Aditya Shankar Jha</span>
                    <span>adityajha2021@gmail.com</span>
                  </div>
                </div>
            </div>
            <div className={css.content}>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout