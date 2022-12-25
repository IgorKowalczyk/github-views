import mongoose from "mongoose";
import Schema from "./Schema";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("Please add your Mongo URI to .env file");

const connection = new mongoose.connect(uri, {
 useUnifiedTopology: true,
 useNewUrlParser: true,
});

mongoose.models.views ? mongoose.models.views : mongoose.model("views", Schema);

export default connection;
