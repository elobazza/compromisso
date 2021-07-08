import { Request, Response } from "express";
import { CreateContactService } from "../services/CreateContactService";

class CreateContactController {

    async handle(request: Request, response: Response) {
        const { nome, fone, email, usuario } = request.body;

        const createContactService = new CreateContactService();

        const contact = await createContactService.execute({ nome, fone, email, usuario });

        return response.json(contact);
    }

}

export { CreateContactController };