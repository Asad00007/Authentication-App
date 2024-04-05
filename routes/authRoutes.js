import { Router } from "express";
import { loginUser } from "../Controller/AuthController.js";
const router = Router();

router.post("/", loginUser);

export default router;
