import React, { useRef, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { FaRegChartBar } from "react-icons/fa";
import styled from "styled-components";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Donor_Chart = () => {
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState("#2B7FFF66");

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const ctx = chart.ctx;
      const grad = ctx.createLinearGradient(0, 0, 0, chart.height);
      grad.addColorStop(0, "#1A3DE9");
      grad.addColorStop(1, "#2B7FFF66");
      setGradient(grad);
    }
  }, []);

  const data = {
    labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        data: [60, 30, 80, 100, 40, 70],
        backgroundColor: gradient,
        borderRadius: 6,
        barThickness: "flex",
        maxBarThickness: 40,
        categoryPercentage: 0.6,
        barPercentage: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#555",
          font: {
            size: 12,
            family: "sans-serif",
          },
        },
      },
      y: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      },
    },
  };

  return (
    <ChartContainer>
      <div className="donation-header">
        <div>
          <h3>Donation History</h3>
          <p>Your giving pattern over the last 6 months.</p>
        </div>
        <FaRegChartBar className="chart-icon" />
      </div>
      <div className="chart-wrapper">
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </ChartContainer>
  );
};

export default Donor_Chart;

const ChartContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 20px;
  padding: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 1.25rem;
    border-radius: 18px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 0.875rem;
    border-radius: 14px;
  }

  .donation-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      margin-bottom: 0.875rem;
    }

    @media (max-width: 480px) {
      margin-bottom: 0.75rem;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    margin: 0 0 0.25rem 0;
    color: #333;

    @media (max-width: 1024px) {
      font-size: 17px;
    }

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 15px;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    color: #666;

    @media (max-width: 768px) {
      font-size: 13px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  .chart-icon {
    font-size: 22px;
    color: #99a1af;
    flex-shrink: 0;

    @media (max-width: 1024px) {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
      align-self: flex-end;
    }
  }

  .chart-wrapper {
    flex: 1;
    min-height: 200px;
    position: relative;

    @media (max-width: 1024px) {
      min-height: 180px;
    }

    @media (max-width: 768px) {
      min-height: 160px;
    }

    @media (max-width: 480px) {
      min-height: 140px;
    }
  }
`;
