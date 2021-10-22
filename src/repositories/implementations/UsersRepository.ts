import { User } from "../../entities/User";
import { prisma } from "../../utils/prisma-client";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<User | null> {
    return await prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return await prisma.users.findUnique({
      where: {
        id,
      },
    });
  }

  async save(user: User): Promise<User> {
    return await prisma.users.create({
      data: user,
    });
  }
}
