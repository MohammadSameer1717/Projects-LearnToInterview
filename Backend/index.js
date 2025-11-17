import express from "express";
import path from "path";
import { ENV } from "./src/lib/env.js";

const app = express();

const __dirname = path.resolve();

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "API is up and running" });
});

// Example API
app.get("/books", (req, res) => {
  res.status(200).json({ msg: "This is the books endpoint" });
});

// Prepare app for production deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

app.listen(ENV.PORT, () =>
  console.log("Server is running on port:", ENV.PORT)
);
