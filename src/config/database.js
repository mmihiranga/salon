const mongoose = require("mongoose");

const URI = "mongodb+srv://salon:salon@saloncluster.frox4.mongodb.net/smartSalon?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    console.log("Database Connected");
}

module.exports = connectDB;