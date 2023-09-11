import { UserRepository } from '../../../shared/database';
import {
  HttpResponse,
  IHttpResponse,
} from '../../../shared/helpers/httpResponse';
export class GetUserByIdUseCase {
  // private repository: UserRepository;
  // constructor(repository: UserRepository) {
  //   this.repository = repository;
  // }

  constructor(private repository: UserRepository) {}

  async execute(id: string): Promise<IHttpResponse> {
    const user = await this.repository.findById(id);
    if (!user) {
      return HttpResponse.notFound(
        new Error(`User with id '${id}' not founded`)
      );
    }
    return HttpResponse.ok(user);
  }
}
