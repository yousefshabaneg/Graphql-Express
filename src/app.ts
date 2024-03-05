import { Application, NextFunction, Request, Response } from "express";
import express from "express";
import cors from "cors";
import AppError from "./helpers/AppError";
import globalErrorHandler from "./controllers/errorController";
import api from "./api";
import "./auth/loginWithGoogle";
import passport from "passport";
import cookieSession from "cookie-session";
import config from "./config";
const app: any = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//cookie session
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, //1Day
    keys: [config.cookieSecret],
  })
);

//passport.initialize
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", api);

//Routes

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new AppError(
    `Can't find ${req.originalUrl} resource on the server`,
    404
  );
  next(err);
});

app.use(globalErrorHandler);

export default app;
