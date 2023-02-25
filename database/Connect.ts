import mongoose, { ConnectOptions, connect, Model, Schema } from "mongoose";
import { usersSchema, IUserDocument } from "./Schema";

const uri = import.meta.env.MONGODB_URI;
if (!uri) throw new Error("Please add your Mongo URI to .env file");

const connection = connect(uri, {
 useUnifiedTopology: true,
 useNewUrlParser: true,
} as ConnectOptions);

const Views = (mongoose.models.views as Model<IUserDocument> | undefined) || mongoose.model<IUserDocument>("views", usersSchema as Schema);

export { Views, connection };
