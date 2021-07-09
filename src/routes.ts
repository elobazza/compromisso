import { Router } from "express";
import { CreateCompromiseController } from "./controllers/CreateCompromiseController";
import { CreateContactController } from "./controllers/CreateContactController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteCompromiseController } from "./controllers/DeleteCompromiseController";
import { ListCompromisesByContactController } from "./controllers/ListCompromisesByContactController";
import { ListCompromisesController } from "./controllers/ListCompromisesController";


const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const createContactController = new CreateContactController();
router.post("/contacts", createContactController.handle);

const createCompromiseController = new CreateCompromiseController();
router.post("/compromises", createCompromiseController.handle);

const listCompromisesController = new ListCompromisesController();
router.get("/compromises", listCompromisesController.handle);

const listCompromisesByContactController = new ListCompromisesByContactController();
router.get("/compromises/:id", listCompromisesByContactController.handle);

const deleteCompromiseController = new DeleteCompromiseController();
router.delete("/compromise/:id", deleteCompromiseController.handle);


export { router };