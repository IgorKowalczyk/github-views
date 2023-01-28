import mongoose, { ConnectOptions, connect } from "mongoose";
import type { Model, Document, Schema } from "mongoose";
import usersSchema from "./Schema";

const uri = import.meta.env.MONGODB_URI;
if (!uri) throw new Error("Please add your Mongo URI to .env file");

const connection = connect(uri, {
 useUnifiedTopology: true,
 useNewUrlParser: true,
} as ConnectOptions);

(mongoose.models.views as Model<Document> | null) ? mongoose.models.views : mongoose.model("views", usersSchema as Schema);

export default connection as Promise<typeof mongoose>;
