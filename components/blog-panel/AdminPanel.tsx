import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Blogs from "./BlogsNumber";
import AddBlog from "./AddBlog";

const AdminPanel = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");

  const renderContent = () => {
    switch (activeComponent) {
      case "dashboard":
        return <Dashboard />;
      case "blogs":
        return <Blogs />;
      case "addBlog":
        return <AddBlog />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800">
        <Sidebar setActiveComponent={setActiveComponent} />
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-gray-100">{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;
