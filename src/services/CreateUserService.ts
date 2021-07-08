import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

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

        const passwordHash = await hash(senha, 8);

        const user = usersRepository.create({
            nome,
            username,
            senha: passwordHash
        });

        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };