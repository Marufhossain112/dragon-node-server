const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors());
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.get("/", (req, res) => {
  res.send("News api is running.");
});
app.get("/news-categories", (req, res) => {
  res.send(categories);
});

app.get("/news/:id", (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  const selectedNews = news.find((n) => id === n._id);
  res.send(selectedNews);
});
app.get("/categories/:id", (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const selectedNews = news.filter((n) => id === n.category_id);
    res.send(selectedNews);
  }
});
app.listen(port, () => {
  console.log("Example listening on the port", port);
});
