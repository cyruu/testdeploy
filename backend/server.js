import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("sdasd");
});
app.get("/data", (req, res) => {
  res.send({ a: "adta" });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening at port ", port);
});
