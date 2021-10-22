import { Post } from "../entities/Post";

export interface IPostsRepository {
  findAll(userId: string): Promise<Post[]>;
  findById(id: string): Promise<Post | null>;
  save(post: Post): Promise<Post>;
}
