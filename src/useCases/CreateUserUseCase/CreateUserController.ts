import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
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
