import express from "express";

const usersRouter = express.Router();
const handleEdit = (req: any, res: any) => res.send("Edit User");
const handleDelete = (req: any, res: any) => res.send("Delete User");

//START HTTP METHOD declaration ===============================================
usersRouter.get("/edit", handleEdit);
usersRouter.get("/delete", handleDelete);
//E N D HTTP METHOD declaration ===============================================

export default usersRouter;
