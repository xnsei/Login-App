import connectDB from "./utils/dbConnection";

const express = require("express");
const cors = require("cors");

const wrapAsync = require("./utils/wrapAsync");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get(
  "/login",
  wrapAsync(async (req: any, res: any) => {
    res.json({ message: "Hello" });
  })
);
