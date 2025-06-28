const listingModel = require("../models/listingModel.js");
const reviewModel = require("../models/reviewModel.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const axios = require('axios');

const radar = axios.create({
  baseURL: 'https://api.radar.io/v1',
  headers: {
    Authorization: process.env.RADAR_SECRET_KEY
  }
});

module.exports.index = async (req, res, next) => {
  const allListing = await listingModel.find({}).populate("owner");
  res.render("listing/index.ejs", { allListing });
};

module.exports.getNewListing = async (req, res, next) => {
  res.render("listing/new.ejs");
};

module.exports.postNewListing = async (req, res, next) => 
  {
    const listingData = req.body.listing;

    const query = listingData.location || "New Delhi, India"
    const response = await radar.get('/geocode/forward', 
      {
        params: { query }
      });
    const geometry = response.data?.addresses?.[0]?.geometry;
  
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new listingModel(listingData);
    newListing.owner = req.user._id;
    newListing.image = {url, filename}
    newListing.geometry = geometry;
    
    await newListing.save();
    req.flash("success", "New listing created successfully!");
    res.redirect("/listings");
};

module.exports.getList = async (req, res, next) => {
  let { id } = req.params;
  const data = await listingModel
    .findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");

  if (!data) {
    throw new ExpressError(404, "Listing not found!");
  }

  res.render("listing/show.ejs", { data });
};

module.exports.editList = async (req, res, next) => {
  let { id } = req.params;
  const data = await listingModel.findById(id);
  res.render("listing/edit.ejs", { data });
};

module.exports.updateList = async (req, res, next) => {
  let { id } = req.params;
  const listingData = req.body.listing;
  if(typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listingData.image = {url, filename}
  }
  await listingModel.findByIdAndUpdate(id, { ...listingData });
  req.flash("success", "Listing updated successfully!");
  res.redirect(`/listings/${id}`);
};

module.exports.delList = async (req, res, next) => {
  let { id } = req.params;
  await listingModel.findByIdAndDelete(id);
  req.flash("success", "Listing deleted successfully!");
  res.redirect("/listings");
};
