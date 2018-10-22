const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const cors=require('cors');
const mongoose=require('mongoose');
const config=require('./config/database');

//connected to database
mongoose.connect(config.database);
//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database'+config.database)
});
const app=express();

const blog=require('./routes/api');

const port=process.env.PORT || 8000;

//CORS Middleware
app.use(cors());

//
app.use(express.static(path.join(__dirname,'public')));

//Body parser Middleware
app.use(bodyParser.json())

app.use('/',blog);

//INDEX ROUTE
app.get('/',(req,res)=>{
    res.send("Invalid Endpoint");
});

app.listen(port,()=>{
    console.log('server started on port '+port);
});
