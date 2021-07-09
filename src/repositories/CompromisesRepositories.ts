import { EntityRepository, Repository } from "typeorm";
import { Compromise } from "../entities/Compromise";

@EntityRepository(Compromise)
class CompromisesRepositories extends Repository<Compromise> { }

export { CompromisesRepositories };