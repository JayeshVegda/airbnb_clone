const mongoose = require("mongoose");
const { sampleListings } = require("./data.js");
const Listing = require("../models/listingModel.js");

const mongoDBUrl = "mongodb+srv://admin:admin@cluster0.44c66rd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


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
async function startServer() {
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


