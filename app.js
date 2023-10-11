const express = require("express");
const mongoose = require("mongoose");

const ActiveGroup = require("./Routes/ActiveGroupRouter");

const app = express();

const url = "mongodb://127.0.0.1:27017/Premium";

app.use(express.json());

const port = process.env.PORT || 7000;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error);



app.use("/", ActiveGroup);

app.listen(port, () => console.log(`Server running on port ${port}`));
