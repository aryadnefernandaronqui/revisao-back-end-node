import User from '../../features/users/model/user.model';
import { InvalidParamError } from '../helpers/errors';
export class UserRepository {
  private static users: User[] = [];

  async save(user: User) {
    UserRepository.users.push(user);
  }

  async findAll() {
    return UserRepository.users;
  }

  async findById(id: string) {
    return UserRepository.users.find((u) => u.id === id);
  }
}
