

import mongoose from "mongoose";
import { ENV } from "./config";
import logger from "@shared/utils/logger";




const connectDB = async (): Promise<void> => {
  try {
     await mongoose.connect(ENV.MONGO_URI);
     logger.info("MongoDB Connected Successfully");
  } catch (error) {
    logger.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;