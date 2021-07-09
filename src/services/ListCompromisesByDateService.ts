import { getCustomRepository } from "typeorm";
import { CompromisesRepositories } from "../repositories/CompromisesRepositories";

class ListCompromisesByDateService {
    async execute(dataInicio: Date, dataFim: Date) {
        const compromisesRepositories = getCustomRepository(CompromisesRepositories);

        const compromises = await compromisesRepositories.query(
            'SELECT * FROM compromisso AS c WHERE c.data > $1 AND c.data < $2',
            [dataInicio, dataFim]
        );

        return compromises;
    }
}

export { ListCompromisesByDateService };