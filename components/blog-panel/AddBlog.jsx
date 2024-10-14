import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import styles for the editor
import axios from "axios"; // Import axios for API calls
import { v4 as uuidv4 } from "uuid";

// Dynamically import ReactQuill to prevent SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// Custom Toolbar
const CustomToolbar = () => (
  <div id="toolbar">
    <select
      className="ql-header"
      defaultValue={""}
      onChange={(e) => e.persist()}
    >
      <option value="1">Header 1</option>
      <option value="2">Header 2</option>
      <option value="">Normal</option>
    </select>
    <select className="ql-font" defaultValue={""} onChange={(e) => e.persist()}>
      <option value="sans-serif">Sans Serif</option>
      <option value="Nourd">Nourd</option>
      <option value="serif">Serif</option>
      <option value="monospace">Monospace</option>
    </select>
    <select
      className="ql-size"
      defaultValue="medium"
      onChange={(e) => e.persist()}
    >
      <option value="small">Small</option>
      <option value="medium">Medium</option>
      <option value="large">Large</option>
      <option value="huge">Huge</option>
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-strike" />
    <button className="ql-blockquote" />
    <button className="ql-list" value="ordered" />
    <button className="ql-list" value="bullet" />
    <button className="ql-link" />
    <button className="ql-image" />
    <button className="ql-video" />
    <select className="ql-color" defaultValue="black">
      <option value="black" />
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="purple" />
      <option value="orange" />
    </select>
    <select className="ql-background" defaultValue="white">
      <option value="white" />
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="purple" />
      <option value="yellow" />
    </select>
    <button className="ql-clean" />
  </div>
);

const AddBlog = () => {
  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [adminName, setAdminName] = useState("John Doe"); // Editable admin name
  const [image, setImage] = useState(null); // State for the uploaded image
  const currentDate = new Date().toLocaleDateString(); // Auto-generated date

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Create a form data object
    const blogData = {
      id: uuidv4(),
      title,
      description,
      content,
      adminName,
      date: currentDate,
      image, // Include the image in the blog data
    };

    // Post the blog data to the API without awaiting
    axios
      .post("/api/blogsData", blogData)
      .then((response) => {
        console.log("Blog submitted:", response.data);
        // Optionally, reset the form fields after submission
        setTitle("");
        setDescription("");
        setContent("");
        setImage(null); // Reset the image field
      })
      .catch((error) => {
        console.error("Error submitting blog:", error);
      });
  };

  // Handle image selection
  async function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result); // Resolve with Base64 URL
      reader.onerror = reject; // Handle error
      reader.readAsDataURL(file); // Convert file to DataURL (Base64)
    });
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      convertFileToBase64(file).then((url) => setImage(url));
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Form */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Add Blog</h1>
        <form onSubmit={handleSubmit}>
          {/* Admin Name */}
          <label className="block mb-2 font-semibold">Admin Name:</label>
          <input
            className="block w-full p-2 border mb-4 rounded"
            type="text"
            placeholder="Enter admin name"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
          />

          {/* Blog Title */}
          <label className="block mb-2 font-semibold">Blog Title:</label>
          <input
            className="block w-full p-2 border mb-4 rounded"
            type="text"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Blog Description */}
          <label className="block mb-2 font-semibold">Description:</label>
          <textarea
            className="block w-full p-2 border mb-4 rounded"
            placeholder="Enter blog description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          {/* Image Upload */}
          <label className="block mb-2 font-semibold">Upload Image:</label>
          <input
            type="file"
            accept="image/*" // Only allow image files
            onChange={handleImageChange}
            className="block w-full p-2 border mb-4 rounded"
          />

          {/* Rich Text Editor for Blog Content */}
          <label className="block mb-2 font-semibold">Blog Content:</label>
          <div>
            <CustomToolbar />
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Enter blog content"
              modules={{
                toolbar: {
                  container: "#toolbar", // Use the custom toolbar
                },
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Blog Preview */}
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Live Preview</h2>

        {/* Meta Information (Admin Name & Date) */}
        <p className="text-sm text-gray-500 mb-2">
          Posted by: <strong>{adminName}</strong> on{" "}
          <strong>{currentDate}</strong>
        </p>

        {/* Preview Title */}
        <h3 className="text-xl font-bold mb-2">{title || "Blog Title"}</h3>

        {/* Preview Description */}
        <p className="text-gray-600 mb-4">
          {description || "Blog Description"}
        </p>

        {/* Preview Content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: content || "<p>Blog Content</p>",
          }}
        ></div>

        {/* Preview Image */}
        {image && (
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Preview Image:</h4>
            <img
              src={image}
              alt="Uploaded Preview"
              className="w-full h-auto rounded"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBlog;
