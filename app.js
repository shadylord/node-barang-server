const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const barangRoutes = require("./server/routes/barang");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.use("/api/barang", barangRoutes);

app.get("*", (req, res) =>
  res.status(201).send({ message: "Hello! Welcome to the default API route." })
);

app.listen(port, () => console.log(`Listening to port ${port}.`));
