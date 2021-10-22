import Router from "express";

import { authenticateController } from "./useCases/Authenticate";
import { createPostController } from "./useCases/CreatePostUseCase";
import { createUserController } from "./useCases/CreateUserUseCase";
import { getPostController } from "./useCases/GetPostUseCase";

import authMiddleware from "./common/middlewares/auth";

const router = Router();

// PUBLIC
router.post("/users", (req, res) => createUserController.handle(req, res));
router.post("/authenticate", (req, res) =>
  authenticateController.handle(req, res),
);

router.use(authMiddleware);

// PROTECTED
router.get("/posts", async (req, res) => getPostController.handle(req, res));
router.get("/posts/:id", async (req, res) =>
  getPostController.handleWithParam(req, res),
);
router.post("/posts", (req, res) => createPostController.handle(req, res));

export { router };
