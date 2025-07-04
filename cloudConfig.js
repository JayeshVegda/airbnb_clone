const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "PropertyBNB_DEV",
        allowedFormats: ["png", "jpg", "jpeg", "gif", "webp"],
        transformation: [{ width: 800, height: 600, crop: "limit" }]
    }
})

module.exports = {
    cloudinary, storage
}