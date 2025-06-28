const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateReview, isReviewAuthor} = require("../middleware.js");

const review = require("../controller/reviewController.js")


// Create review
router.post("/", isLoggedIn, validateReview, wrapAsync(review.review));

// Delete review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(review.delReview));

module.exports = router;