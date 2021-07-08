import { Router } from "express";
import { CreateContactController } from "./controllers/CreateContactController";
import { CreateUserController } from "./controllers/CreateUserController";


const router = Router();

const createUserController = new CreateUserController();
router.post("/users", createUserController.handle);

const createContactController = new CreateContactController();
router.post("/contacts", createContactController.handle);

export { router };