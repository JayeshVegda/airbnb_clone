const {reviewSchema} = require("../schema.js");
const listingModel = require("../models/listingModel.js");
const reviewModel = require("../models/reviewModel.js");
const ExpressError = require("../utils/ExpressError.js");

module.exports.review = async (req, res, next) => {
    let { id } = req.params;
    let listingRes = await listingModel.findById(id);
    
    if (!listingRes) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    let newReview = new reviewModel(req.body.review);
    newReview.author = req.user._id;
    listingRes.reviews.push(newReview);

    await newReview.save();
    await listingRes.save();

    req.flash("success", "Review is saved");
    res.redirect(`/listings/${id}`);
}
module.exports.delReview = async (req, res, next) => {
    let {id, reviewId} = req.params;
    await listingModel.findByIdAndUpdate(id, {$pull: {reviews : reviewId}});
    await reviewModel.findByIdAndDelete(reviewId);
    req.flash("success", "Review deleted successfully!");
    res.redirect(`/listings/${id}`);
}