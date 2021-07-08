import { EntityRepository, Repository } from "typeorm";
import { Contact } from "../entities/Contact";

@EntityRepository(Contact)
class ContactsRepositories extends Repository<Contact> { }

export { ContactsRepositories };