import express from "express";

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

export const home = (req: any, res: any) => {
	return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req: any, res: any) => {
	const { id } = req.params;
	const video = videos[id - 1];
	return res.render("watch", {
		pageTitle: `Watching ${video.title}`,
		video,
	});
};

export const getEdit = (req: any, res: any) => {
	const { id } = req.params;
	const video = videos[id - 1];
	res.render("edit", {
		pageTitle: `Editing: ${video.title}`,
		video,
	});
};

export const postEdit = (req: any, res: any) => {
	const { id } = req.params;
	console.log("[[[req.body]]]", req.body);
	return res.redirect(`/videos/${id}`);
};
