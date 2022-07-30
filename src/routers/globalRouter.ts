import express from "express";
import { join, login } from "../controllers/usersController";
import { home, search } from "../controllers/videosController";

const globalRouter = express.Router();

//START HTTP METHOD declaration ===============================================
globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
//E N D HTTP METHOD declreation ===============================================
export default globalRouter;
