import { Request, Response } from "express";
import { CreateCompromiseService } from "../services/CreateCompromiseService";


class CreateCompromiseController {
    async handle(request: Request, response: Response) {

        const { descricao, local, data, idcontato, usuario } = request.body;

        const newData = new Date(data);

        const createCompromiseService = new CreateCompromiseService();

        const compromise = await createCompromiseService.execute({
            descricao,
            local,
            data: newData,
            idcontato,
            usuario
        });

        return response.json(compromise);

    }
}

export { CreateCompromiseController };