import express from "express";
const app = express();

app.get("/status", (req, res) => {
  res.json({ message: "User status Ok" });
});

app.listen(3000, () => {
  console.log("User service started on Port 3000");
});
