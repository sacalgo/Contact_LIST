const express=require('express');
const connectDB=require('./config/db');
const cookieParser=require('cookie-parser');
const cors=require('cors');
require("dotenv").config();


const app=express();

//Connect Database
connectDB();


//Init Middleware
 app.use(express.json({extended:false}));

app.get('/', (req, res)=>res.json({msg:'welcome to ContactKeeper API...'}));




//Define Routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));


const PORT=process.env.PORT||5001;


app.listen(PORT, ()=>console.log(`Server started on port ${PORT} `));

