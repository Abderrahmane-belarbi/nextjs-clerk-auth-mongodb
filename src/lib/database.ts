import mongoose, { Mongoose } from "mongoose";

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

const MONGODB_URI = process.env.MONGODB_URI;

let cached: MongooseConnection = (global as any).mongoose;
if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connect() {
  if (!MONGODB_URI) {
    return new Error("Please Add Mongodb URI to .env.local or .env file");
  }

  if (cached.conn) return cached.conn;
  try {
    cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "clerk-auth-nextjs",
      connectTimeoutMS: 30000,
    });
    console.log('MONGODB CONNECTED')
  
  } catch (error) {
    console.log('MONGODB NOT CONNECTED')    
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}
