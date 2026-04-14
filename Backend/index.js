import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.routes.js";
import jobRoute from "./routes/jobs.routes.js";
import  applicationRoute from "./routes/application.routes.js";
import path from "path"
dotenv.config();

const app = express();
const _dirname = path.resolve();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const corsOptions = {
  origin: "https://jobnest1.onrender.com", 
  credentials: true,  
};
app.use(cors(corsOptions));


//apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);

app.use(express.static(path.join(_dirname, "fronted/dist")));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.resolve(_dirname, "fronted", "dist", "index.html"));
});
// Server start
const port = process.env.PORT || 4000; //  Use uppercase PORT for convention
app.listen(port, () => {
  connectDB();
  console.log(`Server running at port ${port}`);
});
