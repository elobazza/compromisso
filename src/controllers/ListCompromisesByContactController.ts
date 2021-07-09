import { Request, Response } from "express";
import { ListCompromisesByContactService } from "../services/ListCompromisesByContactService";

class ListCompromisesByContactController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const listCompromisesService = new ListCompromisesByContactService();

        const contact_id = Number(id);

        const compromises = await listCompromisesService.execute(
            contact_id
        );

        return response.json(compromises);
    }
}

export { ListCompromisesByContactController };