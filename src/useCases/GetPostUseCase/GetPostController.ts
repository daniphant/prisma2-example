import { Request, Response } from "express";
import { GetPostUseCase } from "./GetPostUseCase";

export class GetPostController {
  constructor(private getPostUseCase: GetPostUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const post = await this.getPostUseCase.execute(request.userId as string);

      return response.status(200).send({ error: null, payload: post });
    } catch (err) {
      return response.status(400).send({
        error: err.message || "Unexpected error.",
        payload: null,
      });
    }
  }

  async handleWithParam(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { id } = request.params;
      const post = await this.getPostUseCase.executeWithparam(id);

      return response.status(200).send({ error: null, payload: post });
    } catch (err) {
      return response.status(400).send({
        error: err.message || "Unexpected error.",
        payload: null,
      });
    }
  }
}
