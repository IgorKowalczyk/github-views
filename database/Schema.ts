import mongoose, { Schema, Document, Model } from "mongoose";

mongoose.set("strictQuery", false);

export interface IUser {
 username: string;
 views: number;
}

export interface IUserDocument extends IUser, Document {}

export const usersSchema = new Schema<IUserDocument>({
 username: {
  type: String,
  index: true,
  unique: true,
 },
 views: Number,
});

export const Views: Model<IUserDocument> = mongoose.models.views || mongoose.model<IUserDocument>("views", usersSchema);
