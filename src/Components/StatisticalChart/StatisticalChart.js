import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const StatisticalChart = () => {
  const option={
    color:['var(--orange)'],

    toolbox:{
      feature:{
        saveAsImage:{}
      }
    },

    tooltip:{
      trigger: "axis",
      axisPointer:{
        type:"cross"
      },
      backgroundColor: "rgb(0,0,0,0,59)",
      borderWidth: 0,
    },

    grid:{
      left:"3%",
      right:"4%",
      bottom:"3%",
      containLabel:true,
      show:false
    },

    xAxis:[
      {
        type: "category",
        boundary: false,
        data:["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      }
    ],

    yAxis:[
      {
        type: "value",
        splitLine: {
          show: false,
        }
      }
    ],

    series:[
      {
        type:"line",
        smooth:true,

        lineStyle: {
          color: new echarts.graphic.LinearGradient(0,0,0,1,[
            {
              offset:0,
              color: "rgb(255,191,0)",
            },
            {
              offset:1,
              color: "#F450d3",
            }
          ]),
          width: 4,
        },

        areaStyle:{
          opacity:0.5,
          color: new echarts.graphic.LinearGradient(0,0,0,0.8,[
            {
              offset:0,
              color: "#FE4C00",
            },
            {
              offset:1,
              color: "rgba(255,144,70,0.1)",
            }
          ]),
        },

        emphasis: {
          focus: "series"
        },

        showSymbol:false,
        data:[3827,4639,4637,2983,2347,6243,5188]
      }
    ]
  }
  
  const getChartStyle = () => {
    const isMobile = window.innerWidth <= 768;
    return {
      height: isMobile ? '200px' : '300px',
      width: '100%'
    };
  };
  
  return (
    <ReactECharts
      option={option}
      style={getChartStyle()}
      opts={{renderer: 'svg'}}
    />
  )
}

export default StatisticalChart