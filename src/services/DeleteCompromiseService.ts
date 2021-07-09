import { getCustomRepository } from "typeorm";
import { CompromisesRepositories } from "../repositories/CompromisesRepositories";

class DeleteCompromiseService {
    async execute(idcompromisso: number) {
        const compromisesRepositories = getCustomRepository(CompromisesRepositories);

        const compromise = await compromisesRepositories.findOne({
            idcompromisso
        });

        if (!compromise) {
            throw new Error('Compromise does not exists!');
        }

        await compromisesRepositories.delete({ idcompromisso });
    }
}

export { DeleteCompromiseService };