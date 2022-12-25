import connection from "./Connect.js";

export async function IncreaseViews(username) {
 const collection = await connection.then((db) => db.models.views);
 if(username === "example") return 0;
 const view = await collection.findOneAndUpdate(
  {
   username,
  },
  {
   $inc: { views: 1 },
  },
  {
   upsert: true,
   new: true,
  }
 );
 return view.views;
}

export async function GetViews(username) {
 const collection = await connection.then((db) => db.models.views);
 const view = await collection.findOne({
  username,
 });
 return view ? view.views : 0;
}
