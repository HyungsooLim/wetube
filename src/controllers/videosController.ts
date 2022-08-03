import express from "express";

const fakeUser = {
	username: "HSLim",
	loggedIn: true,
};

export const home = (req: any, res: any) => {
	const videos = [
		{
			title: "video #1",
			rating: 5,
			comments: 2,
			createdAt: "2 minutes ago",
			views: 59,
			id: 1,
		},
		{
			title: "video #2",
			rating: 5,
			comments: 2,
			createdAt: "2 minutes ago",
			views: 59,
			id: 1,
		},
		{
			title: "video #3",
			rating: 5,
			comments: 2,
			createdAt: "2 minutes ago",
			views: 59,
			id: 1,
		},
	];
	return res.render("home", { pageTitle: "Home", videos });
};
export const selectVideo = (req: any, res: any) => res.render("selectVideo");
export const editVideo = (req: any, res: any) => res.render("edit");
export const search = (req: any, res: any) => res.send("search video");
export const deleteVideo = (req: any, res: any) => res.send("delete video");
export const upload = (req: any, res: any) => res.send("upload video");
