import { Request, Response } from "express";
import { ListCompromisesByDateService } from "../services/ListCompromisesByDateService";

class ListCompromisesByDateController {
    async handle(request: Request, response: Response) {

        const { dataInicio, dataFim } = request.params;

        const listCompromisesService = new ListCompromisesByDateService();

        const novaDataInicio = new Date(dataInicio);
        const novaDataFim = new Date(dataFim);

        const compromises = await listCompromisesService.execute(
            novaDataInicio, novaDataFim
        );

        return response.json(compromises);
    }
}

export { ListCompromisesByDateController };