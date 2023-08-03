require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; 
const mongoose = require("mongoose");
const cors = require ("cors")
//import router
const goalRouter = require("./routes/goalRouter")

//middleware
app.use(express.json());
app.use(cors()); //allows to share resources

//route
app.use("/api/goals", goalRouter);

//db connection
const start = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI); //conects to mongo db
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
//error route
app.use((req, res) => {
  res.status(404).send("Resource Not Found");
});
