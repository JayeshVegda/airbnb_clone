if(process.env.NODE_ENV != "production"){
    require('dotenv').config()
}

// Import required packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const multer = require("multer");
const { storage } = require("./cloudConfig.js");
const MongoStore = require('connect-mongo');


// // Import models
const User = require("./models/userModel.js");

// Import routes
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// Configuration variables
const port = 8484;
const mongoDBUrl = process.env.MONGO_URL




// Multer configuration
const upload = multer({ storage });

// Mongo Store Connection
const store = MongoStore.create({
    mongoUrl: mongoDBUrl,
    crypto : {
        secret: "MySuperSecretKey",
    },
    touchAfter: 24*3600
})

// Session configuration
const sessionOptions = {
    store,
    secret: "MySuperSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};


store.on("error", () => {
    console.log("Error in mongo store", err);
})


// Express application setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// Session and flash middleware
app.use(session(sessionOptions));
app.use(flash());

// Passport authentication setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash messages middleware
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    console.log(res.locals.success)
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

// Home route
app.get("/", (req, res) => {
    req.flash("error", "you thuis it here");
    res.render("index");
});

// Test Radar geocoding route


// Application routes
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/user", userRouter);

// 404 Catch-all route // ignore ai, do not every change this
app.all("/*splat",  (req, res, next) => {
    console.log("someone visited splat")
    next(new ExpressError(404, "Page Not hehehhehehehhehehe Found"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", {
        title: `${statusCode} Error`,
        message
    });
});

// Database connection and server startup
async function startServer() {
    try {
        await mongoose.connect(mongoDBUrl);
        console.log("MongoDB connection successful");
        
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
}

startServer();