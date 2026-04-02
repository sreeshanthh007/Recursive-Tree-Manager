import { Request, Response, NextFunction } from "express";
import { HttpStatusCodes } from "@shared/constants/httpStatusCode";
import logger from "@shared/utils/logger";
import { ZodError } from "zod";

export const errorMiddleware = (
  err: Error & { isOperational?: boolean; statusCode?: number },
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(`${req.method} ${req.url} - Error: ${err.message}`, { 
    stack: err.stack,
    error: err 
  });


  if (err.isOperational) {
    return res.status(err.statusCode ?? HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
    });
  }


  if (err instanceof ZodError) {
    const message = err.issues.map(issue => issue.message).join('. ');
    return res.status(HttpStatusCodes.BAD_REQUEST).json({
      success: false,
      message: `Validation failed: ${message}`,
    });
  }


  return res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Something went wrong",
  });
};
