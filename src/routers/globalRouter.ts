import express, { Router } from "express";
import { join, login } from "../controllers/usersController";
import { home } from "../controllers/videosController";

const globalRouter: Router = express.Router();

//START HTTP METHOD declaration ===============================================
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
//E N D HTTP METHOD declreation ===============================================
export default globalRouter;
