import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js"; // Import Chart type
import { chartData, chartOptions } from "./data";
import { BiRefresh } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";

interface DashboardProps {
  totalBlogs: number;
  categories: string[];
  refreshData: () => void;
  downloadReport: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  totalBlogs,
  categories,
  refreshData,
  downloadReport,
}) => {
  let chartRef: Chart | null = null; // Use Chart type for chartRef

  useEffect(() => {
    return () => {
      if (chartRef) {
        chartRef.destroy(); // Destroy chart instance on unmount
      }
    };
  }, [chartRef]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Blogs */}
        <div className="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold">Total Blogs</h3>
          <p className="text-5xl text-blue-600">{totalBlogs}</p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={refreshData}
              className="text-blue-500 hover:text-blue-700"
            >
              <BiRefresh className="inline-block mr-1" /> Refresh
            </button>
            <button
              onClick={downloadReport}
              className="text-blue-500 hover:text-blue-700"
            >
              <FaDownload className="inline-block mr-1" /> Download Report
            </button>
          </div>
        </div>

        {/* Yearly Chart */}
        <div className="bg-white p-5 rounded-lg shadow-md col-span-2 transition-transform transform hover:scale-105 duration-300">
          <Line
            ref={(reference) => (chartRef = reference as Chart)} // Cast reference to Chart type
            data={chartData}
            options={chartOptions}
          />
        </div>

        {/* Blog Categories */}
        <div className="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300">
          <h3 className="text-xl font-semibold">Blog Categories</h3>
          <ul className="list-disc ml-5">
            {categories.map((category, index) => (
              <li key={index} className="text-gray-700">
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
