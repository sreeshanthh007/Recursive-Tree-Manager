import { ENV } from "@config/config";
import express from "express";
import cors from "cors";
import logger from '@shared/utils/logger';
import { errorMiddleware } from "@middlewares/error.middleware";
import { rateLimiter } from "@middlewares/rateLimiter";
import connectDB from "@config/db";
import morgan from "morgan";
import Router from "@routes/node.route";






const app = express();

connectDB();

app.use(cors({
    origin:ENV.CLIENT_URL,
    credentials:true
}));

app.use(morgan("dev"));

app.use(rateLimiter);

app.use(express.json());



app.use("/api/v1", Router);

app.use(errorMiddleware);


app.listen(ENV.PORT, () => {
    logger.info(`Server is running on port ${ENV.PORT}`);
});