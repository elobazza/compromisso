import { getCustomRepository } from "typeorm";
import { ContactsRepositories } from "../repositories/ContactsRepositories";

interface IContactRequest {
    nome: string;
    fone: string;
    email: string;
    usuario: string;
}

class CreateContactService {

    async execute({ nome, fone, email, usuario }: IContactRequest) {

        const contactsRepository = getCustomRepository(ContactsRepositories);

        if (!fone || !email) {
            throw new Error("Contact incorrect");
        }

        const contactAlreadyExists = await contactsRepository.findOne({
            nome,
        });

        if (contactAlreadyExists) {
            throw new Error("Contact already exists");
        }

        const contact = contactsRepository.create({
            nome,
            fone,
            email,
            usuario
        });

        await contactsRepository.save(contact);

        return contact;


    }

}

export { CreateContactService };