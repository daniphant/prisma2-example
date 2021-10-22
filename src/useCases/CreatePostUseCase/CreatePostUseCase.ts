import { Post } from "../../entities/Post";
import { IPostsRepository } from "../../repositories/IPostsRepository";
import { CreatePostDTO } from "./CreatePostDTO";

export class CreatePostUseCase {
  constructor(private readonly postsRepository: IPostsRepository) {}

  async execute(dto: CreatePostDTO): Promise<Post> {
    const post = new Post(dto);

    return await this.postsRepository.save(post);
  }
}
