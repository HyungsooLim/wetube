import express from "express";
import { getEdit, watch, postEdit } from "../controllers/videosController";

const videosRouter = express.Router();

//START HTTP METHOD declaration ===============================================

videosRouter.get("/:id(\\d+)", watch);
videosRouter.get("/:id(\\d+)/edit", getEdit);
videosRouter.post("/:id(\\d+)/edit", postEdit);

//E N D HTTP METHOD declaration ===============================================

export default videosRouter;
