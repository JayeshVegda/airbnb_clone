const express = require("express");
const router = express.Router({mergeParams: true});

const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

const { saveRedirectUrl } = require("../middleware.js");


const user = require("../controller/userController.js")

router.route("/signup")
    .get(user.getSignUp)
    .post(wrapAsync(user.postSignUp));

router.route("/login")
    .get(user.getLogin)
    .post(saveRedirectUrl,  passport.authenticate("local", { failureFlash:true, failureRedirect : "/user/login" }), wrapAsync(user.postLogin))


router.get("/logout", user.logout);

module.exports = router;