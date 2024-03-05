import express from "express";
import loginWithGoogleRouter from "./loginWithGoogleRoutes";
const router = express.Router();

router.use(loginWithGoogleRouter);

export default router;
