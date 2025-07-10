import express from "express";
import authMiddleware from "./auth.js";

const app = express();

const PORT = 3000;

app.use(authMiddleware);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server corriendo en http://localhost:3000`);
});
