import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';

const authController = {};

authController.signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new userModel({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      "success": true,
      "message": "User created successfully"
    });
  } catch (error) {
    next(error);
  }
};

export default authController;