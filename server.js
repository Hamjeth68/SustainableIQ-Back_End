import Express from "express";
import Mongoose from "mongoose";
import CorsOptions from "cors";
import bodyParser from "body-parser";
import apiRoutes from "./routes/api.js";

const app = Express();

app.use("/api", apiRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const CONNECTION_URL =
  "mongodb+srv://user:Index-123@cluster0.uhijm.mongodb.net/SustainableIQ?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

Mongoose.connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log("server running on port: ${PORT}"))
  )
  .catch((error) => console.log(error.message));
