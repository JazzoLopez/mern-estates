import authController from "../controllers/auth.controller.js";
import { Router } from 'express';

const router = new Router();

router.post('/signup', authController.signup);

export default router;
