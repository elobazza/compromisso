import { getCustomRepository } from "typeorm";
import { CompromisesRepositories } from "../repositories/CompromisesRepositories";

class ListCompromisesService {
    async execute() {
        const compromisesRepositories = getCustomRepository(CompromisesRepositories);

        const compromises = await compromisesRepositories.find();

        return compromises;
    }
}

export { ListCompromisesService };