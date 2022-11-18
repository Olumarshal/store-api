const mongoose = require('mongoose');
require("dotenv").config();

const CONNECTION_URI = process.env.CONNECTION_URI


function connectToDB() {
    mongoose.connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      });
    
    mongoose.connection.on("connected", () => {
        console.log("Successfully connected to Database");
    });

    mongoose.connection.on("error", (err) => {
        console.log("An error occured");
        console.log(err);
    });
}

module.exports = {
    connectToDB
};

