import mongoose from "mongoose";
import "dotenv/config";


export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);
    throw error;
  }
}



// -------------------------------------------------------------------------
// import mongoose from "mongoose";


// export const connectDB = async () => {
//     await mongoose.connect('').then(()=>console.log("DB Connected"))
// } 



// --------------------------------------------------------------------------


// import mongoose from 'mongoose';
// export async function connectToMongoDB() {
//   try {
//     await mongoose.connect("");
//     console.log("You successfully connected to MongoDB!");
//     return mongoose;
//   } catch (err) {
//     console.dir(err);
//   }
// }

// // Call this only when your application terminates
// export async function disconnectFromMongoDB() {
//   await mongoose.connection.close();
// }


// ----------------------------------------------------------------------------

