import { Request, Response } from "express";
import { ListContactsByNameService } from "../services/ListContactsByNameService";

class ListContactsByNameController {
    async handle(request: Request, response: Response) {

        const { name } = request.params;

        const listContactsService = new ListContactsByNameService();

        const contacts = await listContactsService.execute(
            name
        );

        return response.json(contacts);
    }
}

export { ListContactsByNameController };