import { Request, Response } from "express";

export const join = (req: Request, res: Response) => res.send("join");
export const editUser = (req: Request, res: Response) => res.send("edit user");
export const deleteUser = (req: Request, res: Response) =>
	res.send("delete user");
export const login = (req: Request, res: Response) => res.send("login");
export const logout = (req: Request, res: Response) => res.send("logout");
export const selectUser = (req: Request, res: Response) =>
	res.send("select user");
