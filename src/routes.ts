import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateCompromiseController } from "./controllers/CreateCompromiseController";
import { CreateContactController } from "./controllers/CreateContactController";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteCompromiseController } from "./controllers/DeleteCompromiseController";
import { ListCompromisesByContactController } from "./controllers/ListCompromisesByContactController";
import { ListCompromisesByDateController } from "./controllers/ListCompromisesByDateController";
import { ListCompromisesController } from "./controllers/ListCompromisesController";
import { ListContactsByNameController } from "./controllers/ListContactsByNameController";
import { UpdateContactController } from "./controllers/UpdateContactController";


const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const createContactController = new CreateContactController();
router.post("/contacts", createContactController.handle);

const createCompromiseController = new CreateCompromiseController();
router.post("/compromises", createCompromiseController.handle);

const listCompromisesController = new ListCompromisesController();
router.get("/compromises", listCompromisesController.handle);

const listCompromisesByDateController = new ListCompromisesByDateController();
router.get("/compromises/date", listCompromisesByDateController.handle);

const listCompromisesByContactController = new ListCompromisesByContactController();
router.get("/compromises/:id", listCompromisesByContactController.handle);

const deleteCompromiseController = new DeleteCompromiseController();
router.delete("/compromise/:id", deleteCompromiseController.handle);

const listContactsByNameController = new ListContactsByNameController();
router.get("/contacts/name", listContactsByNameController.handle);

const updateContactController = new UpdateContactController();
router.put("/contact/:id", updateContactController.handle);

const authenticateUserController = new AuthenticateUserController();
router.post("/login", authenticateUserController.handle);


export { router };