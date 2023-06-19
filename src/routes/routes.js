import { Router } from 'express';
import usersController from '../controller/user-controller.js';

const router = Router();

router.get('/users', usersController.getUsers);
router.post('/users', usersController.createUsers);
router.get('/ping', (res) => res.send('pong'));

export default router;
