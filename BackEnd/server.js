const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require('./routes/auth/auth-routes')
// "mongodb+srv://syedsameerdev20:syed2000@cluster0.z0r0h.mongodb.net/"
const URL = 'mongodb+srv://syedsameerdev20:syed2000@cluster0.z0r0h.mongodb.net/'
// connect mongo db
mongoose
  .connect(URL)
  .then(() => console.log("Mongo DB connected"))
  .catch((error) => console.log(`failed to connect DB ${error}`));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
})

