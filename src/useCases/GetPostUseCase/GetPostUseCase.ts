import { Post } from "../../entities/Post";
import { IPostsRepository } from "../../repositories/IPostsRepository";

export class GetPostUseCase {
  constructor(private readonly postsRepository: IPostsRepository) {}

  async execute(userId: string): Promise<Post[]> {
    return await this.postsRepository.findAll(userId);
  }

  async executeWithparam(id: string): Promise<Post | null> {
    return await this.postsRepository.findById(id);
  }
}
