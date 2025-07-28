import { Router } from 'express';
import { userRegisterController } from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/user.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  userRegisterController,
);
export default router;
