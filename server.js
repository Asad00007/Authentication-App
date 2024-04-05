import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  return res.send("Hi everyone");
});

//Routes file
import routes from "./routes/index.js";
app.use("/", routes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
