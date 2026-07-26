import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 3000,

  NODE_ENV: process.env.NODE_ENV || "development",

  SMTP_HOST: process.env.SMTP_HOST || "smtp.gmail.com",

  SMTP_PORT: Number(process.env.SMTP_PORT) || 587,

  SMTP_USER: process.env.SMTP_USER || "ramesh.mani.3133@gmail.com",

  SMTP_PASS: process.env.SMTP_PASS || "yhro xjne qehi xhrq",

  CONTACT_EMAIL: process.env.CONTACT_EMAIL || "ramesh.beece007@gmail.com",
};