import React from 'react'
import css from './Statistics.module.css'
import {BsArrowUpShort} from 'react-icons/bs'
import { groupNumber } from '../../Data/Data'
import StatisticalChart from '../StatisticalChart/StatisticalChart'

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
        <span className={css.title}>Overview Statistics</span>
        <div className={`${css.cards} grey-container`}>
            <div>
                <div className={css.arrowIcon}>
                    <BsArrowUpShort/>
                </div>
                <div className={css.card}>
                    <span>Top Items This Month</span>
                    <span>Office Components</span>
                </div>

                <div className={css.card}>
                    <span>Items</span>
                    <span>{groupNumber(74.00003)}</span>
                </div>

                <div className={css.card}>
                    <span>Profit</span>
                    <span>profit</span>
                    <span>${groupNumber(37000)}</span>
                </div>

                <div className={css.card}>
                    <span>Daily Average</span>
                    <span>${groupNumber(57348)}</span>
                </div>
            </div>
        </div>
        <StatisticalChart/>
    </div>
  )
}

export default Statistics