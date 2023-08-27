import connectDB from "../utils/dbConnection";

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const wrapAsync = require("../utils/wrapAsync");
const user = require("../models/user");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const authenticateToken = wrapAsync(async (req: any, res: any, next: any) => {
  const token = req.headers.token;
  try {
    const decodedUser = jwt.verify(token, "secret123");
    const email = decodedUser.email;
    const foundUser = await user.findOne({ email: email });
    if (foundUser) {
      next();
    } else {
      res.status(401);
      return res.json({ messaeg: "Logged in successfully!", token: token });
    }
  } catch (error) {
    res.status(401);
    return res.json({ message: "Error occured: ", Error: error });
  }
});

app.post(
  "/login",
  wrapAsync(async (req: any, res: any) => {
    const { email, password } = req.body;
    const requestedUser = await user.findOne({
      email: email,
      password: password,
    });
    if (!requestedUser) {
      return res.json({ message: "Please enter valid credentials" });
    } else {
      const token = jwt.sign(
        {
          username: requestedUser.username,
          email: requestedUser.email,
        },
        "secret123"
      );
      return res.json({ messaeg: "Logged in successfully!", token: token });
    }
  })
);

app.post("/register", async (req: any, res: any) => {
  try {
    const { username, email, password } = req.body;
    const requestedUser = new user({
      username: username,
      email: email,
      password: password,
    });
    await requestedUser.save();
    return res.json({ message: "User registered successfully" });
  } catch (error) {
    return res.json({ message: "Error occured : ", Error: error });
  }
});

app.get(
  "/api",
  // authenticateToken,
  wrapAsync(async (req: any, res: any) => {
    res.json({ message: "user got to the api" });
  })
);

app.get(
  "/authenticate",
  authenticateToken,
  wrapAsync(async (req: any, res: any) => {
    res.json({ message: "user is authenticated" });
  })
);

app.listen(8000, () => {
  console.log("server online at port 8000");
});
