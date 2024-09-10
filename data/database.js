import mongoose from "mongoose";

export const connectDb = () => {
  mongoose.connect(process.env.MONGO_URI, {
    dbName: "backendapi",
    
  }).then((c) => console.log(`Data base conected with ${c.connection.host}`)).catch(() => console.log(e));
}