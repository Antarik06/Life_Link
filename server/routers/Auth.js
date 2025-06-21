const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth.js");

//Sign Up

authRouter.post("/api/signup" , async(req , res )=>{

    try{
        const {name,email,password} = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({msg :"User with same email already exists !"}) // Bad request
        }

        const hashedPassword = await bcryptjs.hash(password, 8);

        let user = new User({
            email,
            password: hashedPassword,
            name,
        });

        user = await user.save(); // id of user
        res.json(user);




    }catch(e){
        res.status(500).json({
            error : e.message
        });

    }

}
);

// Sign in 

authRouter.post("/api/signin" , async(req , res )=>{

    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({msg :"User doesnot exists !"}) // Bad request
        }
    
    
        const isMatch = await bcryptjs.compare(password, user.password)
        if(!isMatch){
                return res.status(400).json({msg :" Incorrect Password !"}) // Bad request
            }


        const token =jwt.sign({id: user._id}, "passwordkey");
        res.json({
            token: token,
            _id: user._id ? String(user._id) : '',
            name: user.name ? String(user.name) : '',
            email: user.email ? String(user.email) : '',
            password: user.password ? String(user.password) : '',
        });

    }
    catch(e){
        res.status(500).json({
            error : e.message
        });

    }

});

module.exports=authRouter

function newFunction() {
    return "require";
}

authRouter.get("/",auth, async (req, res) => {
    const user = await User.findById(req.user);
    res.json({...user._doc, token: req.token }); // Exclude password from response
});

authRouter.post("/tokenISValid", auth, async (req, res) => {
    try{
        const token = req.header("x-auth-token");
        if (!token) {
            return res.json(false);
        }
        const verified = jwt.verify(token, "passwordkey");
        if (!verified) {
            return res.json(false);
        }
        const user = await User.findById(req.user);
        res.json({...user._doc, token: req.token });
        if (!user) return res.json(false);
        res.json(true); // Exclude password from response
    }
    catch(e){
        res.status(500).json({
            error : e.message
        });
    }

});