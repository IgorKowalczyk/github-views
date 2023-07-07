import type { Model } from "mongoose";
import { connection } from "./Connect.js";
import { IUserDocument } from "./Schema";

export async function IncreaseViews(username: string) {
 if (username === "example") return 0;
 const collection = (await connection).models.views as Model<IUserDocument>;
 const view = await collection.findOneAndUpdate({ username }, { $inc: { views: 1 } }, { upsert: true, new: true });
 return view.views;
}

export async function GetViews(username: string) {
 const collection = (await connection).models.views as Model<IUserDocument>;
 const view = await collection.findOne({ username });
 return view ? view.views : 0;
}
