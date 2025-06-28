const User = require("../models/userModel.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.getSignUp = (req, res) => {
    console.log("GET /user/signup - Flash messages:", {
        success: req.flash("success"),
        error: req.flash("error")
    });
    res.render("user/signup.ejs");
}

module.exports.postSignUp = async (req, res) => 
    {
        try {
            console.log("POST /user/signup - Body:", req.body);
            const { username, email, password } = req.body;
            const newUser = new User({ email, username });
            const regUser = await User.register(newUser, password);
            console.log("User registered successfully:", regUser.username);
            req.login(regUser, (err) => 
                {
                if(err) { return next(err)};
                req.flash("success", "New user is registered successfully!");
                return res.redirect("/listings");
            }
        )
        }catch (e){
            req.flash("error", "user is already registered");
            res.redirect("/user/signup");
        }
   
}

module.exports.getLogin = (req, res) => {
    res.render("user/login")
}


module.exports.postLogin = async (req, res) => {
    req.flash("success", "welcome")
    res.redirect(res.locals.redirectUrl);
}

module.exports.logout = (req, res, next) => 
    {
        req.logout( (err) => {
            if(err) { return next(err)};
        })

    req.flash("success", "Thank for visiting");
    console.log("you are logged out")
    res.redirect("/listings");
    }