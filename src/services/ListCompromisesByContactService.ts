import { getCustomRepository } from "typeorm";
import { CompromisesRepositories } from "../repositories/CompromisesRepositories";

class ListCompromisesByContactService {
    async execute(contact_id: number) {
        const compromisesRepositories = getCustomRepository(CompromisesRepositories);

        const compromises = await compromisesRepositories.find({
            where: {
                idcontato: contact_id,
            },
            relations: ["idcontato", "usuario"],
        });

        return compromises;
    }
}

export { ListCompromisesByContactService };