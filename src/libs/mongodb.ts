import mongoose from "mongoose";

const { NEXT_PUBLIC_MONGODB_URI } = process.env;

if (!NEXT_PUBLIC_MONGODB_URI) {
  throw new Error("MONGO DB NOT DEFINE");
}

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(NEXT_PUBLIC_MONGODB_URI);
    if (connection.readyState === 1) {
      console.log("MongoDB Connect sucessfully");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
  }
};
