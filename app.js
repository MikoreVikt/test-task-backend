require("dotenv").config({ path: "./.env" });

const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const { authRouter } = require("./routes/api/authRouter");
const { pollRouter } = require("./routes/api/pollRouter");
const { adminRouter } = require("./routes/api/adminRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", pollRouter);
app.use("/api/admin", adminRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

module.exports = { app };
