import { Router } from 'express';
import usersController from '../controller/user-controller.js';

const userRouter = Router();

userRouter.get('/', usersController.getUsers);
userRouter.post('/', usersController.createUsers);

export default userRouter;
