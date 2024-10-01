import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic for client-side rendering

// Dynamically import the ReactQuill component to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css"; // Import Quill styles

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [fontSize, setFontSize] = useState("16px");
  const [textColor, setTextColor] = useState("#000000");
  const [media, setMedia] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Blog submitted:", { title, category, content, tags, media });
  };

  return (
    <div className="flex space-x-4">
      {/* Input Tab */}
      <div className="w-1/2">
        <h2 className="text-3xl font-bold mb-5">Add New Blog</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg"
          />
          {/* Rich Text Editor for Blog Content */}
          <ReactQuill
            value={content}
            onChange={(value: string) => setContent(value)}
            className="border border-gray-300 rounded-lg"
            style={{ minHeight: "200px" }}
          />
          <input
            type="text"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="file"
            onChange={handleMediaChange}
            className="block w-full p-3 border border-gray-300 rounded-lg"
          />
          <label className="block">
            Font Size:
            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="14px">14px</option>
              <option value="16px">16px</option>
              <option value="18px">18px</option>
              <option value="20px">20px</option>
            </select>
          </label>
          <label className="block">
            Text Color:
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-lg"
            />
          </label>
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg"
          >
            Publish
          </button>
        </form>
      </div>

      {/* Preview Tab */}
      <div className="w-1/2 border-l border-gray-300 pl-4">
        <h2 className="text-3xl font-bold mb-5">Preview</h2>
        <div
          style={{
            fontSize: fontSize,
            color: textColor,
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3 className="text-xl font-semibold">{title || "Blog Title"}</h3>
          <p className="text-gray-500">{category || "Category"}</p>
          {/* Display the content from the rich text editor */}
          <div
            dangerouslySetInnerHTML={{
              __html: content || "Content goes here...",
            }}
          />
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Preview"
              className="mt-4"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
          {media && <p>Media: {media.name}</p>}
          <p>{tags ? `Tags: ${tags}` : "Tags: Not specified"}</p>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
