// data.ts
import { Chart, registerables } from "chart.js";

// Register all necessary components including the category scale
Chart.register(...registerables);

export const monthlyBlogData: number[] = [2, 4, 3, 5, 8, 6, 7, 5, 4, 9, 10, 12];

export const chartData = {
  labels: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ],
  datasets: [
    {
      label: "Blogs Published",
      data: monthlyBlogData,
      borderColor: "rgba(255, 228, 0, 1)",
      backgroundColor: "rgba(255, 228, 0, 0.2)",
      fill: true,
    },
  ],
};

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly Blog Publishing Trend",
    },
  } as const,
};
