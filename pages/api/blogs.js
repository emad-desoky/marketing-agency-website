// pages/api/blogs.js
import path from "path";
import { promises as fs } from "fs";

const filePath = path.join(process.cwd(), "data", "blogs.json");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await fs.readFile(filePath, "utf8");
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.error("GET Error:", error);
      res.status(500).json({ error: "Failed to read data" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
