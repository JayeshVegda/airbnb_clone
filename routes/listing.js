const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controller/listingController.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });

// Index route - show all listings
router.get("/",  wrapAsync(listingController.index));

router.route("/new")
    .get(isLoggedIn, wrapAsync( listingController.getNewListing))
    .post(isLoggedIn, validateListing, upload.single('listing[imageFile]'), wrapAsync(listingController.postNewListing));


router.route("/:id")
    .get( wrapAsync(listingController.getList))
    .put(isLoggedIn, isOwner, validateListing, upload.single('listing[imageFile]'), wrapAsync(listingController.updateList))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.del))

// Edit listing form
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editList));

module.exports = router; 