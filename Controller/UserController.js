import { hash } from "bcrypt";
import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (findUser) {
    return res.json({
      status: 400,
      message: "Email already taken. Please use another email",
    });
  }

  const hashedPassword = await hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  return res.json({
    status: 200,
    data: newUser,
    message: "User Created Successfully!!",
  });
};
