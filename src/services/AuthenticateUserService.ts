import { getCustomRepository } from "typeorm";
import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    username: string;
    senha: string;
}

class AuthenticateUserService {
    async execute({ username, senha }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        // Verificar se username existe
        const user = await usersRepositories.findOne({
            username
        });

        if (!user) {
            throw new Error("Username/Password incorrect");
        }

        if (senha !== user.senha) {
            throw new Error("Password incorrect");
        }

        // Gerar token
        const token = sign(
            {
                username: user.username,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
                subject: user.idusuario.toString(),
                expiresIn: "1d",
            }
        );

        return token;
    }
}

export { AuthenticateUserService };