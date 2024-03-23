import express from "express";
const app = express();

app.get("/status", (req, res) => {
  res.json({ message: "Cart status Ok" });
});

app.listen(3000, () => {
  console.log("Cart service started on Port 3000");
});
