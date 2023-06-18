import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
//import cors from "cors";


import rentRoute from './routes/rentRoute.js';
import saleRoute from '../backend/routes/saleRoute.js';
import userRoute from '../backend/routes/userRoute.js';

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

// routes
app.use('/rent', rentRoute);
app.use('/sale', saleRoute);
app.use('/user', userRoute);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME} `
)
.then(()=>{
    console.log("Database connected!🏢 🏣")
})
.catch((error)=>{
    console.log(error.message);
    console.log("🚨🚨🚨🚨")
})

app.listen(PORT, () => {
  console.log(`Server is listening to port  ${PORT}`);
});
