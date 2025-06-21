const express = require("express");
const mongoose = require("mongoose");
const AuthRouter = require("./routers/Auth")

const PORT = process.env.PORT || 3000;
const app = express();



const DB = "mongodb+srv://subhamnabik2005:subham2005@cluster0.h9kq35e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 

mongoose.connect(DB).then (() => {
    console.log("Connection Succesful");
})
.catch((e) =>{
    console.log(e);
});

app.use(express.json());

app.use(AuthRouter)

app.listen(PORT , "0.0.0.0" , () => {
    console.log("Connected at port " + PORT);
});  //Node js connection