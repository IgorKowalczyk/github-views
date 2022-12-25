import mongoose from "mongoose";

const Schema = mongoose.Schema({
 username: { type: String, index: true, unique: true },
 views: Number,
});

export default Schema;
