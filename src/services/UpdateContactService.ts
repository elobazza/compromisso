import { getCustomRepository } from "typeorm";
import { Contact } from "../entities/Contact";
import { ContactsRepositories } from "../repositories/ContactsRepositories";

interface IContactRequest {
    idcontato: number;
    nome: string;
    fone: string;
    email: string;
    usuario: string;
}

class UpdateContactService {
    async execute({ idcontato, nome, fone, email, usuario }: IContactRequest) {
        const contactsRepositories = getCustomRepository(ContactsRepositories);

        if (!fone || !email) {
            throw new Error("Contact incorrect");
        }

        const newContact = contactsRepositories.create({
            nome,
            fone,
            email,
            usuario
        });

        const oldContact = await contactsRepositories.findOne({
            idcontato
        });

        if (!oldContact) {
            throw new Error('Contact does not exists!');
        }

        await contactsRepositories.update(idcontato, newContact);
    }
}

export { UpdateContactService };