import { Router } from "express";

import contactRoutes from "./contact.routes.js";

const router = Router();

router.get("/health", (_, res) => {

    res.json({

        success: true,

    });

});

router.use(

    "/contact",

    contactRoutes

);

export default router;