import React, { useRef, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale,LinearScale,BarElement,Tooltip} from 'chart.js';

import { FaRegChartBar } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Donor_Chart = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState('#2B7FFF66'); 

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const grad = ctx.createLinearGradient(0, 0, 0, chart.height);
      grad.addColorStop(0, '#1A3DE9');
      grad.addColorStop(1, '#2B7FFF66');
      setGradient(grad);
    }
  }, []);

  const data = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        data: [60, 30, 80, 100, 40, 70],
        backgroundColor: gradient,
        borderRadius: 8,
        barThickness: 130,
        categoryPercentage: 0.5,
        maxBarThickness: 150
        
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#555',
          font: { size: 14, family: 'sans-serif' }
        }
      },
      y: {
        display: false
      }
    }
  };

  return (
    <div style={{boxShadow: " rgba(0, 0, 0, 0.16) 0px 1px 4px", borderRadius: "25px", padding: "2rem"}}>
      <div className="donation-header">
        <div>
          <h3 style={{fontSize: "22px", fontWeight: 400}}>Donation History</h3>
          <p style={{fontSize: "16px", lineHeight: "1.5]" }}>Your giving pattern over the last 6 months.</p>
        </div>
        <FaRegChartBar style={{fontSize: "25px", fontWeight: 100, color: "#99A1AF"}} />
      </div>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default Donor_Chart;