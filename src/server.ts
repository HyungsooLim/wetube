import express from "express";

const PORT = 8080;

const app = express();

const handleListen = () => {
    console.log(`Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListen);
