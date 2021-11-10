// external modules
import express from express

// internal modules
import { config } from "./config/config.js";
import rootRoutes from "./routes/root.routes.js"

const app = express()

app.use("/", rootRoutes)

app.listen( config.app.port, () => {
  console.log(`App is running on port ${config.app.port}`);
} )