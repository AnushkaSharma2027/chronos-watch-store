# ⌚ CHRONOS - Luxury Watch E-Commerce Platform

A full-stack e-commerce platform specialized for luxury watches.

## 🚀 Tech Stack

### Frontend
- React.js
- CSS3
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Bcrypt

### Services
- MongoDB Atlas (Database)
- Cloudinary (Image Storage) - To be integrated
- Razorpay (Payments) - To be integrated

## ✨ Features

### Completed
- ✅ User authentication (Register/Login with JWT)
- ✅ Password encryption (Bcrypt)
- ✅ MongoDB database connection
- ✅ RESTful API architecture
- ✅ User, Product, and Order models
- ✅ Protected routes middleware
- ✅ Responsive homepage
- ✅ Modern UI design

### To Be Implemented
- 🔜 Product CRUD operations
- 🔜 Shopping cart
- 🔜 Razorpay payment integration
- 🔜 Cloudinary image uploads
- 🔜 Admin dashboard
- 🔜 Order management

## 📦 Installation

### Backend Setup
```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
```

Run backend:
```bash
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 🌐 API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user (Protected)

## 👤 Author

**Anushka Sharma**
- GitHub: [@AnushkaSharma2027](https://github.com/AnushkaSharma2027)

## 📝 License

This project is open source and available under the MIT License.