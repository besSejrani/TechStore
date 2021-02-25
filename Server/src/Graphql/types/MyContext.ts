import { Request, Response, NextFunction } from "express";

export interface MyContext {
  req: Request;
  res: Response;
  next: NextFunction;
}
