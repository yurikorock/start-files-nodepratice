import { Router } from 'express';
import {
  loginUserController,
  logoutUserController,
  userRegisterController,
} from '../controllers/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { loginUserShcema, registerUserSchema } from '../validation/user.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(userRegisterController),
);
router.post(
  '/login',
  validateBody(loginUserShcema),
  ctrlWrapper(loginUserController),
);
router.post('/logout', ctrlWrapper(logoutUserController));
export default router;
