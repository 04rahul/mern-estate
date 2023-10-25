import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashed_password = bcryptjs.hashSync(password, 10);
  const user = new User({ username, email, password: hashed_password });
  console.log(req.body);
  try {
    await user.save();
    res.status(201).json("User created successfully");
  } catch (err) {
    next(err);
  }
};
