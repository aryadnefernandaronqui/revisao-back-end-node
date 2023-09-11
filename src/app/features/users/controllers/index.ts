import { Request, Response } from 'express';
import User from '../model/user.model';
import { CreateUserUseCase, GetUserByIdUseCase } from '../usecases';
import { UserRepository } from '../../../shared/database';

export default class UserController {
  async createUser(req: Request, res: Response) {
    const { name, age } = req.body;
    const userRepository = new UserRepository();
    const usecase = new CreateUserUseCase(userRepository);

    const { body, statusCode } = await usecase.execute({ age, name });

    return res.status(statusCode).json(body);
  }

  async getAll(req: Request, res: Response) {
    const userRepository = new UserRepository();
    const users = await userRepository.findAll();

    return res.json({ data: users });
  }

  async getById(req: Request, res: Response) {
    const id = req.params.id;
    const userRepository = new UserRepository();
    const usecase = new GetUserByIdUseCase(userRepository);
    const { body, statusCode } = await usecase.execute(id);

    return res.status(statusCode).json(body);
  }
}
