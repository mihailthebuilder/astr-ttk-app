import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { PointInHashtagTrend } from "../lib/types";
import { useState, useEffect } from "react";
import "./TrendChart.css";

type Props = {
  trend: PointInHashtagTrend[];
  name: string;
};

export default function TrendChart(props: Props) {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    ChartJS.register(
      LineElement,
      PointElement,
      LinearScale,
      Title,
      CategoryScale,
      Tooltip
    );

    setIsRegistered(true);
  }, []);

  const labels = props.trend.map((trendPoint) =>
    unixToFormattedDate(trendPoint.recordedForUnixTime)
  );

  const values = props.trend.map((trendPoint) => trendPoint.interest);

  const data = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  return (
    <div
      style={{
        width: "100px",
        height: "50px",
        position: "relative",
        textAlign: "center",
      }}
    >
      {isRegistered ? (
        <Line data={data} options={options} />
      ) : (
        <div className="lds-dual-ring" />
      )}
    </div>
  );
}

function unixToFormattedDate(input: number): string {
  const date = new Date(input * 1000);
  return date.getDate() + "/" + (date.getMonth() + 1);
}
