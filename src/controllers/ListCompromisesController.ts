import { Request, Response } from "express";
import { ListCompromisesService } from "../services/ListCompromisesService";

class ListCompromisesController {
    async handle(request: Request, response: Response) {
        const listCompromisesService = new ListCompromisesService();

        const compromises = await listCompromisesService.execute();

        return response.json(compromises);
    }
}

export { ListCompromisesController };