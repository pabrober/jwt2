import express from "express";
import cors from "cors";
import estudiantesRoutes from "./routes/Rutas.routes";
import morgan from "morgan";

import config from "./config";

const app = express();

app.set("port", config.port);

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", estudiantesRoutes);


export default app;