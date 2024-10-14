import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock data for blogs added each month
const blogData = [
  { month: "Jan", blogs: 12 },
  { month: "Feb", blogs: 15 },
  { month: "Mar", blogs: 10 },
  { month: "Apr", blogs: 20 },
  { month: "May", blogs: 18 },
  { month: "Jun", blogs: 22 },
  { month: "Jul", blogs: 25 },
  { month: "Aug", blogs: 30 },
  { month: "Sep", blogs: 28 },
  { month: "Oct", blogs: 35 },
  { month: "Nov", blogs: 40 },
  { month: "Dec", blogs: 50 },
];

// Calculate total number of blogs
const totalBlogs = blogData.reduce((total, data) => total + data.blogs, 0);

const Dashboard = () => {
  return (
    <div className="p-6">
      {/* Welcome message with animation */}
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome, Admin!
      </motion.h1>

      {/* Total blogs display */}
      <motion.div
        className="mb-6 text-lg font-semibold text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Total Number of Blogs:{" "}
        <span className="text-black font-bold">{totalBlogs}</span>
      </motion.div>

      {/* Blog chart */}
      <div className="w-full h-64">
        <ResponsiveContainer>
          <LineChart
            data={blogData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="blogs"
              stroke="#8884d8"
              strokeWidth={2}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
