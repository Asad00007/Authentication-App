import prisma from "../DB/db.config.js";
import bcrypt from "bcrypt";
import { compare } from "bcrypt";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const isValidPassword = bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    return res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.log("Error logging in: ", error);
  }
};
