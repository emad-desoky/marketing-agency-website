import React from "react";

// Define the type of the props
interface SidebarProps {
  setActiveComponent: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
  return (
    <div className="text-white p-4 fixed h-full bg-gray-800 w-1/4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <ul>
        <li
          className="mb-4 cursor-pointer hover:text-gray-400"
          onClick={() => setActiveComponent("dashboard")}
        >
          Dashboard
        </li>
        <li
          className="mb-4 cursor-pointer hover:text-gray-400"
          onClick={() => setActiveComponent("blogs")}
        >
          Blogs
        </li>
        <li
          className="cursor-pointer hover:text-gray-400"
          onClick={() => setActiveComponent("addBlog")}
        >
          Add Blog
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
