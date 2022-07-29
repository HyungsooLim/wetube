import express, { Request, Response } from "express";

const globalRouter = express.Router();
const handleHome = (req: any, res: any) => res.send("Home");
const handleJoin = (req: Request, res: Response) => res.send("Join");

//START HTTP METHOD declaration ===============================================
globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);
//E N D HTTP METHOD declreation ===============================================
export default globalRouter;
