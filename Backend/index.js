import express from "express";
import { ENV } from "./src/lib/env.js";   

const app = express();

console.log(ENV.PORT);
console.log(ENV.DB_URL);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "success from Backend 123424" });
});

app.listen(ENV.PORT, () =>
  console.log("Server is running on port:", ENV.PORT)
);
