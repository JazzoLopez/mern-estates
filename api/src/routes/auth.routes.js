import authController from "../controllers/auth.controller.js";
import { Router } from 'express';

const router = new Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signIn);

export default router;
