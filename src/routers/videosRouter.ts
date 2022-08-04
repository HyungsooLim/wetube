import express from "express";
import {
	deleteVideo,
	editVideo,
	watch,
	upload,
} from "../controllers/videosController";

const videosRouter = express.Router();

//START HTTP METHOD declaration ===============================================
videosRouter.get("/upload", upload);
videosRouter.get("/:id(\\d+)", watch);
videosRouter.get("/:id(\\d+)/edit", editVideo);
videosRouter.get("/:id(\\d+)/delete", deleteVideo);

//E N D HTTP METHOD declaration ===============================================

export default videosRouter;
