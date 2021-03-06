import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const postsRepository = new PostsRepository();
const createPostUseCase = new CreatePostUseCase(postsRepository);
const createPostController = new CreatePostController(createPostUseCase);

export { createPostUseCase, createPostController };
