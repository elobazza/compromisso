import { Request, Response } from "express";
import { ListContactsByNameService } from "../services/ListContactsByNameService";

class ListContactsByNameController {
    async handle(request: Request, response: Response) {

        const { name } = request.query;

        const listContactsService = new ListContactsByNameService();

        const contacts = await listContactsService.execute(
            name.toString()
        );

        return response.json(contacts);
    }
}

export { ListContactsByNameController };