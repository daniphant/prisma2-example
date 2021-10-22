import Router from "express";
import authMiddleware from "./common/middlewares/auth";
import { PostsRepository } from "./repositories/implementations/PostsRepository";
import { authenticateController } from "./useCases/Authenticate";
import { createPostController } from "./useCases/CreatePostUseCase";
import { createUserController } from "./useCases/CreateUserUseCase";

const router = Router();

// PUBLIC
router.post("/users", (req, res) => createUserController.handle(req, res));
router.post("/authenticate", (req, res) =>
  authenticateController.handle(req, res),
);

router.use(authMiddleware);

// PROTECTED
router.get("/posts", async (req, res) => {
  const postsRepository = new PostsRepository();

  const posts = await postsRepository.findAll(req.userId as string);

  return res.status(200).send(posts);
});

router.post("/posts", (req, res) => createPostController.handle(req, res));

export { router };
