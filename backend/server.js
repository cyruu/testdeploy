import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/api/data", (req, res) => {
  res.send({ a: "adta" });
});
app.get("/api/", (req, res) => {
  res.send("test");
});
app.get("/api/blog/create", (req, res) => {
  res.send("created");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening at port ", port);
});
