import express from "express";
import morgan from "morgan";

const PORT = 8080;

const app = express();
app.use(morgan("dev"));

const globalRouter = express.Router();

const handleHome = (req: any, res: any) => res.send("Home");

globalRouter.get("/", handleHome);

const usersRouter = express.Router();

const handleEditUser = (req: any, res: any) => res.send("Edit User");

const videosRouter = express.Router();

const handleWatchVideo = (req: any, res: any) => res.send("Watch Video");

app.use("/", globalRouter);
app.use("/users", usersRouter);
app.use("/videos", videosRouter);

const handleListen = () => {
	console.log(`✅ Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
