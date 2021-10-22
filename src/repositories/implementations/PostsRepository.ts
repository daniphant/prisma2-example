import { Post } from "../../entities/Post";
import { IPostsRepository } from "../IPostsRepository";
import { prisma } from "../../utils/prisma-client";

export class PostsRepository implements IPostsRepository {
  async findAll(userId: string): Promise<Post[]> {
    return await prisma.posts.findMany({ where: { userId } });
  }

  async findById(id: string): Promise<Post | null> {
    return await prisma.posts.findUnique({ where: { id } });
  }

  async save(post: Post): Promise<Post> {
    return await prisma.posts.create({ data: post });
  }
}
