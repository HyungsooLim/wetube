import express from "express";

const videosRouter = express.Router();
const handleWatch = (req: any, res: any) => res.send("Watch Video");
const handleEdit = (req: any, res: any) => res.send("Edit Video");

//START HTTP METHOD declaration ===============================================
videosRouter.get("/watch", handleWatch);
videosRouter.get("/edit", handleEdit);

//E N D HTTP METHOD declaration ===============================================

export default videosRouter;
