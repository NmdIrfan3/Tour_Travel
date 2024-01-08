import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/user.js";
import reviewRoute from './routes/review.js'
import bookingRoute from './routes/bookings.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions={
  origin:true,
  credentials:true
}

//Database Connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // useNewUrlParser: true, useUnifiedTopology: true 
    });
    console.log("Mongo Database Connected");
  } catch (error) {
    console.log("Database connection failed:", error);
  }
};
//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});