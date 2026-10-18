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
//     await mongoose.connect('mongodb+srv://latixcoin_db_user:zulUC8eC4yMC92AM@cluster0.fik5det.mongodb.net/food-delivery').then(()=>console.log("DB Connected"))
// } 



// --------------------------------------------------------------------------


// import mongoose from 'mongoose';
// export async function connectToMongoDB() {
//   try {
//     await mongoose.connect("mongodb+srv://latixcoin_db_user:zulUC8eC4yMC92AM@cluster0.fik5det.mongodb.net/");
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


// -----------------------------------------------------------------------------


// mongodb+srv://vedantkmtech_db_user:j4CtS3lpTcRyxTDU@cluster0.2j315z8.mongodb.net/food-del

// mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/food-del
