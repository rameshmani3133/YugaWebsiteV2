import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import apiRoutes from "./routes/api.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        defaultSrc: ["'self'"],

        baseUri: ["'self'"],

        objectSrc: ["'none'"],

        frameAncestors: ["'self'"],

        scriptSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://maps.googleapis.com",
        ],

        styleSrc: [
          "'self'",
          "'unsafe-inline'",
          "https://fonts.googleapis.com",
        ],

        fontSrc: [
          "'self'",
          "https://fonts.gstatic.com",
          "data:",
        ],

        imgSrc: [
          "'self'",
          "data:",
          "blob:",
          "https:",
        ],

        connectSrc: [
          "'self'",
          "https://maps.googleapis.com",
        ],

        frameSrc: [
          "'self'",
          "https://www.google.com",
          "https://maps.google.com",
          "https://www.google.com/maps",
        ],
      },
    },
  })
);

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