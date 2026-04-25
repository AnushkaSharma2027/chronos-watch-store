const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();
// Connect to MongoDB
connectDB();
// Import routes
const authRoutes = require('./routes/authRoutes');
//initialize express app 
const app=express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

//test route 
app.get('/',(req,res)=>{
    res.json({
        message: 'welcome to chhronos watch store api',
        status:'server is running successfully!'
    });
});
// API Routes
app.use('/api/auth', authRoutes);
//server port 
const PORT=process.env.PORT || 5000;

//start server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment : ${process.env.NODE_ENV}`);
});
