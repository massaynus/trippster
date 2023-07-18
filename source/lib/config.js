import dotenv from "dotenv";

dotenv.config();

export const ENV = process.env.ENV || "DEV";

export const API_URL = process.env.API_URL
export const API_KEY = process.env.API_KEY
