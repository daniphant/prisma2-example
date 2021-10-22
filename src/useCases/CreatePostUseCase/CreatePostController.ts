import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  constructor(private readonly createPostUseCase: CreatePostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title, content } = request.body;

      const user = await this.createPostUseCase.execute({
        title,
        content,
        userId: request.userId as string,
      });

      return response.status(201).send({
        error: null,
        payload: user,
      });
    } catch (err) {
      return response.status(400).json({
        error: err.message || "Unexpected error",
        payload: null,
      });
    }
  }
}
