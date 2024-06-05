import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
import { handleError } from "../utils/error.js";
import jwt from 'jsonwebtoken';

const authController = {};

authController.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  //validar que no vengan vacios
  if (!username || !email || !password) {
    const error = new Error("Username, email and password are required");
    error.statusCode = 400;
    return next(error);
  }
  const isExist = await userModel.findOne({ username: username });
  if (isExist) {
    const error = new Error("Username already exist");
    error.statusCode = 400;
    return next(error);
  }

  if (password.length < 8) {
    const error = new Error("Password must be at least 8 characters long");
    error.statusCode = 400;
    return next(error)
  }
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newUser = new userModel({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      "success": true,
      "error": "User created successfully"
    });
  } catch (error) {
    next(error);
  }
};

authController.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isExist = await userModel.findOne({ email: email });
    if (!isExist) return next(handleError(401, "User not found"));

    const validatePassword = bcrypt.compareSync(password, isExist.password);
    if (!validatePassword) return next(handleError(401, "Invalid password"));

    const token = jwt.sign({ id: isExist._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = isExist._doc;
    res.cookie('access_token', token, { httpOnly: true }).status(200).json({
      rest
    });
  } catch (error) {
    next(error);
  }
}

export default authController;