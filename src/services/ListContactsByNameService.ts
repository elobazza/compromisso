import { getCustomRepository } from "typeorm";
import { ContactsRepositories } from "../repositories/ContactsRepositories";

class ListContactsByNameService {
    async execute(name: string) {
        const contactsRepositories = getCustomRepository(ContactsRepositories);

        const contacts = await contactsRepositories.find({
            where: {
                nome: name,
            },
            relations: ["usuario"],
        });

        return contacts;
    }
}

export { ListContactsByNameService };