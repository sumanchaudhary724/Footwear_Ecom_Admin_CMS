import React, { useEffect } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { useDispatch, useSelector } from "react-redux";
import { setChartData } from "./chartInfoSlice.js";
import { Bar } from "react-chartjs-2";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const chartData = useSelector((state) => state.chartInfo.chartData);

  // Sample chart data (you can replace this with your actual data)
  const sampleData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    data: [10, 20, 15],
  };

  useEffect(() => {
    // Dispatch an action to set the chart data (replace with actual data retrieval logic)
    dispatch(setChartData(sampleData));
  }, [dispatch]);

  return (
    <AdminLayout title="Dashboard">
      <div className="chart-container">
        <Bar
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: "Chart Data",
                data: chartData.data,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </AdminLayout>
  );
};
