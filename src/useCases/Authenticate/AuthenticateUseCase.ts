import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AuthenticateDTO } from "./AuthenticateDTO";
import jwt from "jsonwebtoken";

export class AuthenticateUseCase {
  constructor(private readonly usersRepository: IUsersRepository) {}

  async execute(data: AuthenticateDTO): Promise<string> {
    const user = await this.usersRepository.findByEmail(data.email);

    if (!user) throw new Error("User not found.");

    if (user.password === data.password) {
      return jwt.sign({ id: user.id }, "secret", { expiresIn: "1d" });
    }

    throw new Error("Invalid credentials.");
  }
}
