import express from "express";

const PORT = 8080;

const app = express();

const gossipMiddleware = (req: any, res: any, next: any) => {
	console.log(`Someone is going to: ${req.url}`);
	next();
};

const handleHome = (req: any, res: any) => {
	return res.send("<h1>this is index page</h1>");
};

const handleLogin = (req: any, res: any) => {
	return res.send("this is login page");
};
app.get("/", gossipMiddleware, handleHome);
app.get("/login", handleLogin);

const handleListen = () => {
	console.log(`✅ Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
