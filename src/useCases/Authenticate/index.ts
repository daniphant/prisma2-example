import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { AuthenticateController } from "./AuthenticateController";
import { AuthenticateUseCase } from "./AuthenticateUseCase";

const usersRepository = new UsersRepository();
const authenticateUseCase = new AuthenticateUseCase(usersRepository);
const authenticateController = new AuthenticateController(authenticateUseCase);

export { authenticateUseCase, authenticateController };
