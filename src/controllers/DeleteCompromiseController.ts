import { query, Request, Response } from "express";
import { DeleteCompromiseService } from "../services/DeleteCompromiseService";

class DeleteCompromiseController {
    async handle(request: Request, response: Response) {
        const deleteCompromiseService = new DeleteCompromiseService();

        const { id } = request.params;

        const idcompromisso = Number(id);

        const compromise = await deleteCompromiseService.execute(idcompromisso);

        return response.json(compromise);
    }
}

export { DeleteCompromiseController };