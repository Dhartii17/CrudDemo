import express, { Express, json } from "express";
import logger from "./middleware/logger";
import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Port listen on ${PORT}`);

})