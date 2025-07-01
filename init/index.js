const mongoose = require("mongoose");
const { sampleListings } = require("./data.js");
const Listing = require("../models/listingModel.js");
if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}
const mongoDBUrl = process.env.MONGO_URL


// cleaning before data
const initDB = async() => {
    try {
        await Listing.deleteMany({});
        await Listing.insertMany(sampleListings);
        console.log("Data was successfully initialized");
    } catch (err) {
        console.error("Error initializing data:", err);
        process.exit(1);
    }
}

// mongo db connection and listing 
async function startServer(mongoDBUrl) {
    try {
        await mongoose.connect(mongoDBUrl);
        console.log("MongoDB connection successful");
        await initDB();
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}

startServer();


