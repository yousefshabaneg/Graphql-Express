import { Application, NextFunction, Request, Response } from "express";

import express from "express";
import cors from "cors";
import AppError from "./helpers/AppError";
import globalErrorHandler from "./controllers/errorController";

const app: any = express();
app.use(express.json());
app.use(cors());

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
