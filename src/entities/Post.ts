import { Posts } from ".prisma/client";

export class Post implements Posts {
  readonly id: string;
  title: string;
  content: string | null;
  userId!: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(post: Omit<Post, "id" | "createdAt" | "updatedAt">) {
    Object.assign(this, post);
  }
}
