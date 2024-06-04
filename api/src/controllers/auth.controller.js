import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';

const authController = {};

authController.signup = async (req, res) => {
    const { username, email, password } = req.body;
    const isExist = await userModel.findOne({ email: email });
    if (isExist) {
        return res.status(400).json({ message: "User already exists" });
    }
    const hassPassword = bcrypt.hashSync(password, 10);
    const newUser = userModel.create({ username, email, password: hassPassword });

    return res.status(201).json({
        "status": "created",
    });
}

export default authController;