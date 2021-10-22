import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(dto: CreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(dto.email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const user = new User(dto);
    return await this.usersRepository.save(user);
  }
}
