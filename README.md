# 🏠 Airbnb Clone

A full-stack clone of Airbnb built with Node.js, Express, MongoDB, and EJS templating engine. Features user authentication, property listings, reviews, and interactive maps.

## ✨ Features

- **User Authentication** - Sign up, login, and logout functionality
- **Property Listings** - Create, edit, and delete property listings
- **Image Upload** - Cloudinary integration for image storage
- **Reviews System** - Users can leave reviews and ratings
- **Interactive Maps** - Radar.io integration for location mapping
- **Responsive Design** - Bootstrap-based UI that works on all devices
- **Search & Filter** - Find properties by location and other criteria
- **GeoJSON API** - RESTful API for location data

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: Passport.js with Local Strategy
- **Frontend**: EJS templating, Bootstrap 5, Font Awesome
- **File Upload**: Multer with Cloudinary
- **Maps**: Radar.io API
- **Styling**: CSS3 with custom animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- Cloudinary account
- Radar.io account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JayeshVegda/airbnb_clone.git
   cd airbnb_clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RADAR_SECRET_KEY=your_radar_secret_key
   ```

4. **Database Setup**
   - Start MongoDB locally or use MongoDB Atlas
   - Update the connection string in `app.js`

5. **Run the application**
   ```bash
   node app.js
   ```

6. **Access the application**
   Open your browser and go to `http://localhost:8484`

## 📁 Project Structure

```
airbnb_clone/
├── controller/          # Route controllers
├── init/               # Database initialization
├── middleware.js       # Custom middleware
├── models/             # MongoDB schemas
├── public/             # Static files (CSS, JS, images)
├── routes/             # Express routes
├── uploads/            # Temporary file uploads
├── utils/              # Utility functions
├── views/              # EJS templates
├── app.js              # Main application file
├── cloudConfig.js      # Cloudinary configuration
├── package.json        # Dependencies and scripts
└── schema.js           # Joi validation schemas
```

## 🔧 Configuration

### Cloudinary Setup
1. Create a Cloudinary account
2. Get your cloud name, API key, and API secret
3. Update the environment variables

### Radar.io Setup
1. Create a Radar.io account
2. Get your API key
3. Update the environment variables

### MongoDB Setup
1. Install MongoDB locally or create a MongoDB Atlas cluster
2. Update the connection string in `app.js`

## 🎯 Key Features Explained

### User Authentication
- Secure password hashing with bcrypt
- Session-based authentication
- Protected routes for authenticated users

### Property Listings
- CRUD operations for listings
- Image upload with Cloudinary
- Location geocoding with Radar.io
- Rich text descriptions

### Reviews System
- Star ratings (1-5 stars)
- Text reviews
- User association
- Delete functionality for review authors

### Interactive Maps
- Real-time location mapping
- GeoJSON format support
- Responsive map containers
- Custom markers and popups

## 📱 API Endpoints

### Listings
- `GET /listings` - View all listings
- `GET /listings/geojson` - Get listings in GeoJSON format
- `GET /listings/:id` - View specific listing
- `POST /listings` - Create new listing
- `PUT /listings/:id` - Update listing
- `DELETE /listings/:id` - Delete listing

### Reviews
- `POST /listings/:id/reviews` - Add review
- `DELETE /listings/:id/reviews/:reviewId` - Delete review

### Users
- `GET /user/signup` - Signup page
- `POST /user/signup` - Create account
- `GET /user/login` - Login page
- `POST /user/login` - Authenticate user
- `GET /user/logout` - Logout user

## 🎨 UI/UX Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern UI** - Clean, intuitive interface
- **Interactive Elements** - Hover effects, animations
- **Loading States** - User feedback during operations
- **Error Handling** - Graceful error messages
- **Flash Messages** - Success and error notifications

## 🔒 Security Features

- **Input Validation** - Joi schema validation
- **XSS Protection** - Sanitized user inputs
- **CSRF Protection** - Method override for forms
- **Secure Sessions** - HTTP-only cookies
- **Password Security** - Hashed passwords

## 🚀 Deployment

### Heroku
1. Create a Heroku account
2. Install Heroku CLI
3. Set environment variables in Heroku dashboard
4. Deploy using Git

### Vercel
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Railway
1. Connect your GitHub repository
2. Set environment variables
3. Deploy with one click

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jayesh Vegda**
- GitHub: [@JayeshVegda](https://github.com/JayeshVegda)

## 🙏 Acknowledgments

- [Airbnb](https://airbnb.com) for inspiration
- [Bootstrap](https://getbootstrap.com) for UI components
- [Cloudinary](https://cloudinary.com) for image hosting
- [Radar.io](https://radar.io) for mapping services
- [MongoDB](https://mongodb.com) for database
- [Express.js](https://expressjs.com) for web framework

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

⭐ **Star this repository if you found it helpful!** 