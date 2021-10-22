import { Request, Response } from "express";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

export class AuthenticateController {
  constructor(private readonly authenticateUseCase: AuthenticateUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const jwt = await this.authenticateUseCase.execute({
        email,
        password,
      });

      return res.status(200).send({ jwt });
    } catch (err) {
      return res.status(400).send({
        error: err?.message ?? "Unknown error",
        payload: "",
      });
    }
  }
}
