const mongoose = require('mongoose');
require("dotenv").config();

const CONNECTION_URI = process.env.CONNECTION_URI

const connectToDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            });
          
          mongoose.connection.on("connected", () => {
              console.log("Successfully connected to Database");
          });
    } catch (error) {
        mongoose.connection.on("error", (err) => {
            console.log("An error occured");
            console.log(err);
        });
    }

    
}

module.exports = {
    connectToDB
};

