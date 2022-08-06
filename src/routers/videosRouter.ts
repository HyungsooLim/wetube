import express from "express";
import { getEdit, watch, postEdit } from "../controllers/videosController";

const videosRouter = express.Router();

//START HTTP METHOD declaration ===============================================

videosRouter.get("/:id(\\d+)", watch);
videosRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

//E N D HTTP METHOD declaration ===============================================

export default videosRouter;
