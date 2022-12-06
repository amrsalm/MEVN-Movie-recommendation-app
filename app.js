//import 
require("dotenv").config();
const express =require('express');
const mongoose =require('mongoose');
const cors =require('cors');
const app =express();
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(express.static("uploads"));

//database connection
mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true,
        useFindAndModify:true,
        useCreateIndex:true},
    function (err, res) {
        try {
            console.log('Connected to Database!');
        } catch (err) {
            throw err;
        }
    })
  

app.use('/api/posts', require("./routes/routes"));
if(process.env.NODE_ENV==='production'){
    app.use(express.static(__dirname+'/dist/'));
    app.get('*',(req,res)=>{
        res.sendFile(__dirname+'/dist/index.html');
    })
}
app.listen(process.env.PORT || 5000,()=> console.log(`server running at http://localhost:${port}`, ))
