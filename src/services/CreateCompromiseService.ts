import { getCustomRepository } from "typeorm";
import { CompromisesRepositories } from "../repositories/CompromisesRepositories";

interface ICompromiseRequest {
    descricao: string;
    local: string;
    data: Date;
    idcontato: string;
    usuario: string;
}

class CreateCompromiseService {

    async execute({ descricao, local, data, idcontato, usuario }: ICompromiseRequest) {

        const compromisesRepository = getCustomRepository(CompromisesRepositories);

        if (!descricao || !local || !data) {
            throw new Error("Compromise incorrect");
        }

        const compromiseAlreadyExists = await compromisesRepository.findOne({
            descricao,
            data,
            local
        });

        if (compromiseAlreadyExists) {
            throw new Error("Compromise already exists");
        }

        const compromise = compromisesRepository.create({
            descricao,
            data,
            local,
            idcontato,
            usuario
        });

        await compromisesRepository.save(compromise);

        return compromise;
    }
}

export { CreateCompromiseService };