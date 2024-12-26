import React from 'react'
import ReactECharts from 'echarts-for-react'

const OrdersPieChart = () => {
    const option={
        series: [
            {
                name:"item",
                type:"pie",
                radius:["60%", "80%"],
                avoidLabelOverlap:false,
                itemStyle:{
                    borderRadius:50,
                    borderColor:"black",
                    borderWidth:5,
                },
                
                label:{
                  show:true,
                  positions:"center",  
                },

                emphasis:{
                    label:{
                        show:true,
                        fontSize:20,
                        fontWeight:"bold",
                    }
                },

                data: [
                    {value:4633, name:"Search Engine"},
                    {value:6734, name:"Direct"},
                    {value:6433, name:"Email"},
                    {value:7846, name:"Advertising"},
                ]
            }
        ]
    }
  return (
    <ReactECharts
        style={{height:140, marginTop:"0.7rem"}}
        option={option}
    />
  )
}

export default OrdersPieChart