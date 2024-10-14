// pages/api/blogsData.js
import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(process.cwd(), "data", "blogsData.json");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await fs.readFile(filePath, "utf8");
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.error("GET Error:", error);
      res.status(500).json({ error: "Failed to read data" });
    }
  } else if (req.method === "POST") {
    try {
      // Read the existing data
      const data = await fs.readFile(filePath, "utf8");
      const blogs = JSON.parse(data);

      // Create a new blog object
      const newBlog = {
        id: String(blogs.length + 1), // Create a new ID based on the existing length
        ...req.body, // Spread the request body
      };

      // Append the new blog to the existing blogs
      blogs.push(newBlog);

      // Write the updated blogs back to the JSON file
      await fs.writeFile(filePath, JSON.stringify(blogs, null, 2));

      res.status(201).json(newBlog);
    } catch (error) {
      console.error("POST Error:", error);
      res.status(500).json({ error: "Failed to write data" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
