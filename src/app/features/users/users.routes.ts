import { Router } from 'express';
import UserController from './controllers';
import { VerifyBodyCreateUser } from './validators/verifyData';

export const usersRoutes = Router();

usersRoutes.get('/', new UserController().getAll);
usersRoutes.get('/:id', new UserController().getById);
usersRoutes.post('/', VerifyBodyCreateUser, new UserController().createUser);
