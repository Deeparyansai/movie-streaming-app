const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 5000;

mongoose
.connect("mongodb+srv://deeparyansaini1098:deep123@cluster0.gr1nt4v.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();


app.use(cors());
app.use(express.json());
app.use("/api/user", require('./routes/UserRoutes'));


app.listen(port , console.log(`server is working successfully on ${port}`));