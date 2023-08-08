import connectDB from "./dbConnection";

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const user = require("./models/user");
const wrapAsync = require("./utils/wrapAsync");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.post(
  "/register",
  wrapAsync(async (req: any, res: any) => {
    const { username, email, password } = req.body;
    const newUser = new user({
      username,
      email,
      password,
    });
    await newUser.save();

    res.json({ message: "ok" });
  })
);

app.post(
  "/login",
  wrapAsync(async (req: any, res: any) => {
    const { username, email, password } = req.body;
    const requestedUser = await user.findOne({
      email: email,
      password: password,
    });
    if (requestedUser) {
      const token = jwt.sign({ username: username, email: email }, "secret123");
      return res.json({ message: "ok", user: token });
    } else {
      return res.json({ message: "error", user: false });
    }
  })
);

app.listen(8000, () => {
  console.log("server is running on port: 8000");
});
