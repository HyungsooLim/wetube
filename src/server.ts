import globalRouter from "./routers/globalRouter";
import express from "express";
import morgan from "morgan";
import usersRouter from "./routers/usersRouter";
import videosRouter from "./routers/videosRouter";

const PORT = 8080;

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/users", usersRouter);
app.use("/videos", videosRouter);

const handleListen = () => {
	console.log(`✅ Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
