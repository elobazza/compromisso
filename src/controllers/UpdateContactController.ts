import { query, Request, Response } from "express";
import { UpdateContactService } from "../services/UpdateContactService";

class UpdateContactController {
    async handle(request: Request, response: Response) {
        const updateContactService = new UpdateContactService();

        const { id } = request.params;
        const { nome, fone, email, usuario } = request.body;

        const idcontato = Number(id);

        const contact = await updateContactService.execute({ idcontato, nome, fone, email, usuario });

        return response.json(contact);
    }
}

export { UpdateContactController };