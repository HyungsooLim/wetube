import express, { Request, Response } from "express";

const fakeUser = {
	username: "HSLim",
	loggedIn: true,
};
let videos = [
	{
		title: "video #1",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 1,
		id: 1,
	},
	{
		title: "video #2",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 2,
	},
	{
		title: "video #3",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		views: 59,
		id: 3,
	},
];

export const home = (req: Request, res: Response) => {
	return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req: Request, res: Response) => {
	const { id }: any = req.params;
	const video = videos[id - 1];
	return res.render("watch", {
		pageTitle: `Watching ${video.title}`,
		video,
	});
};

export const getEdit = (req: Request, res: Response) => {
	const { id }: any = req.params;
	const video = videos[id - 1];
	res.render("edit", {
		pageTitle: `Editing: ${video.title}`,
		video,
	});
};

export const postEdit = (req: Request, res: Response) => {
	const { id } = req.params;
	return res.redirect(`/videos/${id}`);
};
