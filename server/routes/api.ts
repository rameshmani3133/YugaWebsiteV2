import { Router } from "express";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    success: true,
    application: "YUGA DOCUMENT CONSULTANCY CENTRE",
    version: "1.0.0",
    status: "Running",
    timestamp: new Date().toISOString(),
  });
});

export default router;