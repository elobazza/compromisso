import { Request, Response } from "express";
import { ListCompromisesByDateService } from "../services/ListCompromisesByDateService";

class ListCompromisesByDateController {
    async handle(request: Request, response: Response) {

        const { data_inicial, data_final } = request.query;

        const listCompromisesService = new ListCompromisesByDateService();

        const novaDataInicio = new Date(data_inicial.toString());
        const novaDataFim = new Date(data_final.toString());

        const compromises = await listCompromisesService.execute(
            novaDataInicio, novaDataFim
        );

        return response.json(compromises);
    }
}

export { ListCompromisesByDateController };