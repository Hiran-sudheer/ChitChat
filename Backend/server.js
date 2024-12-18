import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connetToMongoDB from "./db/connectToMongoDb.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;



app.use(express.json()); 

app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Hello Worldddd")
// });

app.listen(PORT, () => {
  connetToMongoDB();
  console.log(`Server is Running on port ${PORT}`);
});
