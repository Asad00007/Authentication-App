import { Router } from "express";
import UserRoutes from "./userRoutes.js";
import AuthRoutes from "./authRoutes.js";
const router = Router();

router.use("/api/user", UserRoutes);
router.use("/login", AuthRoutes);

export default router;
