const listingModel = require("./models/listingModel.js");
const reviewModel = require("./models/reviewModel.js");
const {listingSchema, reviewSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(400, msg);
    } else {
        next();
    }
}

module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(400, msg);
    } else {
        next();
    }
}

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        console.log(req.originalUrl);
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "Need to login !");
        return res.redirect("/user/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
        console.log("res : ", res.locals.redirectUrl);  // ✅ FIXED HERE
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await listingModel.findById(id);
    
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }
    
    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }
    
    next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
    const { reviewId } = req.params;
    const review = await reviewModel.findById(reviewId);
    
    if (!review) {
        req.flash("error", "Review not found!");
        return res.redirect("/listings");
    }
    
    if (!review.author.equals(req.user._id)) {
        req.flash("error", "You don't have permission to delete this review!");
        return res.redirect(`/listings/${req.params.id}`);
    }
    
    next();
};
