const express= require('express');
const dotenv= require ('dotenv');
const cors = require('cors');

//load environment variables
dotenv.config();

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
//server port 
const PORT=process.env.PORT || 5000;

//start server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment : ${process.env.NODE_ENV}`);
});
