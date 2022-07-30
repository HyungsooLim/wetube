import express from "express";
import {
	deleteVideo,
	editVideo,
	selectVideo,
	upload,
} from "../controllers/videosController";

const videosRouter = express.Router();

//START HTTP METHOD declaration ===============================================
videosRouter.get("/:id", selectVideo);
videosRouter.get("/:id/edit", editVideo);
videosRouter.get("/:id/delete", deleteVideo);
videosRouter.get("/upload", upload);

//E N D HTTP METHOD declaration ===============================================

export default videosRouter;
