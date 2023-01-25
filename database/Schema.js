import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const Schema = mongoose.Schema({
 username: { type: String, index: true, unique: true },
 views: Number,
});

export default Schema;
