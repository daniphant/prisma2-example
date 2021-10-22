import { Users } from ".prisma/client";

export class User implements Users {
  readonly id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: Omit<User, "id" | "createdAt" | "updatedAt">) {
    Object.assign(this, user);
  }
}
