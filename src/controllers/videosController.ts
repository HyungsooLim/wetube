import express from "express";

export const home = (req: any, res: any) =>
	res.render("home", { pageTitle: "Home" });
export const selectVideo = (req: any, res: any) => res.render("selectVideo");
export const editVideo = (req: any, res: any) => res.render("edit");
export const search = (req: any, res: any) => res.send("search video");
export const deleteVideo = (req: any, res: any) => res.send("delete video");
export const upload = (req: any, res: any) => res.send("upload video");
