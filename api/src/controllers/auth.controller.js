import userModel from "../models/user.model.js";
import bcrypt, { hash } from 'bcrypt';
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
    const validUser = await userModel.findOne({ email });
    if (!validUser) return next(hash(404, 'User not found!'));
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(handleError(401, 'Wrong credentials!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token)
      .status(200)
      .json({
        success: true,
        data: rest
      });
  } catch (error) {
    next(error);
  }
}

export default authController;