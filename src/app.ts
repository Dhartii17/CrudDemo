import express, { Express, json } from "express";
import userRoutes from "./routes/UserRoutes";

const app: Express = express();

app.use(json());

app.use("/api", userRoutes);


export default app;
