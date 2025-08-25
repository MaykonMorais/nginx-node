import express from 'express'
const app = express();

app.get("/api", (_, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(3000, () => {
  console.info("Backend server is running on port 3000");
});
