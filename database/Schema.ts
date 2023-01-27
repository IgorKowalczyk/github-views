import { Schema, set as MongooseSet } from "mongoose";
import type { SchemaDefinition } from "mongoose";

MongooseSet("strictQuery", true);

const usersSchema = new Schema({
 username: {
  type: String,
  index: true,
  unique: true,
 },
 views: Number,
} as SchemaDefinition);

export default usersSchema as Schema;
