'use client'

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: 'Amount',
        data: [4520.51, 7532.23, 9736.46],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Share', 'Open', 'Alpha']
  }

  return <Doughnut 
    data={data} 
    options={{
      cutout:'60%',
      plugins: {
        legend: {
          display: false
        }
      }
    }}
  />
   
}

export default DoughnutChart