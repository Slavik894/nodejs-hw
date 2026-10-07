import { Router } from "express";
import { registerUser } from "../controllers/authController";
import { registerUserSchema } from "../validations/authValidation";
import { celebrate } from "celebrate";

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);

export default router;