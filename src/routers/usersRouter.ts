import express, { Router } from "express";
import {
	editUser,
	logout,
	deleteUser,
	selectUser,
} from "../controllers/usersController";

const usersRouter: Router = express.Router();

//START HTTP METHOD declaration ===============================================
usersRouter.get("/:id", selectUser);
usersRouter.get("/logout", logout);
usersRouter.get("/edit", editUser);
usersRouter.get("/remove", deleteUser);
//E N D HTTP METHOD declaration ===============================================

export default usersRouter;
