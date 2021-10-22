import { PostsRepository } from "../../repositories/implementations/PostsRepository";
import { GetPostController } from "./GetPostController";
import { GetPostUseCase } from "./GetPostUseCase";

const postsRepository = new PostsRepository();
const getPostUseCase = new GetPostUseCase(postsRepository);
const getPostController = new GetPostController(getPostUseCase);

export { getPostUseCase, getPostController };
