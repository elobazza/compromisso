import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { username, senha } = request.body;

        const authenticateUserService = new AuthenticateUserService();

        const token = await authenticateUserService.execute({
            username,
            senha,
        });

        return response.json(token);
    }
}

export { AuthenticateUserController };