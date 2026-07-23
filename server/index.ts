import app from "./app.js";
import { env } from "./config/env.js";

app.listen(env.PORT, () => {
  console.log("====================================");
  console.log("YUGA DOCUMENT CONSULTANCY CENTRE");
  console.log(`Running on Port ${env.PORT}`);
  console.log("====================================");
});