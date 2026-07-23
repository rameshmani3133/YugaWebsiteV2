import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import apiRoutes from "./routes/api.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

const distPath = path.join(process.cwd(), "dist");

app.use(express.static(distPath));

app.get("/{*any}", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.use(errorHandler);

export default app;