import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    nome: string;
    username: string;
    senha: string;
}

class CreateUserService {
    async execute({ nome, username, senha }: IUserRequest) {

        const usersRepository = getCustomRepository(UsersRepositories);

        if (!username) {
            throw new Error("Username incorrect");
        }

        const userAlreadyExists = await usersRepository.findOne({
            username,
        });

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const user = usersRepository.create({
            nome,
            username,
            senha
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };