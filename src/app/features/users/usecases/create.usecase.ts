import { UserRepository } from '../../../shared/database';
import {
  HttpResponse,
  IHttpResponse,
} from '../../../shared/helpers/httpResponse';
import User from '../model/user.model';

type CreateUserDTO = {
  name: string;
  age: number;
};

export class CreateUserUseCase {
  // private repository: UserRepository;
  // constructor(repository: UserRepository) {
  //   this.repository = repository;
  // }

  constructor(private repository: UserRepository) {}

  async execute(dto: CreateUserDTO): Promise<IHttpResponse> {
    try {
      const user = new User(dto.name, dto.age);

      await this.repository.save(user);
      return HttpResponse.created(user);
    } catch (e) {
      return HttpResponse.badRequest(e);
    }
  }
}
