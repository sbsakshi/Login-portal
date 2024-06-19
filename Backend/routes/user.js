import express from 'express'
import bcrypt from 'bcrypt'
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

const router =express.Router();
router.get('/health', (req,res)=>{
    res.send("server is up")
})


router.post('/signup',async (req,res)=>{
    console.log('signup called')
    const {username,email,password}=req.body;
    const user=await User.findOne({email})
    if(user){
        console.dir(res)
        return res.json({message:'user already exists'})
    }

    const hashpassword= await bcrypt.hash(password,10)
    const newUser=new User(
        {
            username,email,password:hashpassword
        }
    )

    await newUser.save()
    var transporter = nodemailer.createTransport({
      service: 'gmail',

      auth: {
        user: 'sakshi.sb2006@gmail.com',
        pass: 'lnbm txzg vqzd npic'
      }
    });
  
    var mailOptions = {
      from: 'sakshi.sb2006@gmail.com',
      to: email,
      subject: 'singed up',
      text: `you have successfully signed up`
    };
    
    try {
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.json({message: "error sending email"});
        } else {
          console.log('Email sent: ' ,info.response);
        }
      });
    } catch (err) {
      console.log(err);
    }
  
    return res.json({status:true,message:"record registered"})
    
})

router.post('/signin', async (req,res)=>{
    

    const {email,password}=req.body;
    console.log('route signin')
    const user=await User.findOne({email})
    console.log(`user:${user}`)
    
    if(!user){
        return res.json({message:"user is not registered"})
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ message: "password is incorrect" });
    }

    // console.log(`key: ${process.env.KEY}`)
    const token =jwt.sign({username:user.username},"jwttokenkey",{expiresIn:'1h'})

    res.cookie('token',token,{httpOnly:true,maxAge:360000})
    return res.json({status:true,message:'signIn succesfull'})
})

router.post('/forgotpassword', async (req,res)=>{
    const {email}=req.body;
    console.log(email)
    try{
        const user=await User.findOne({email}) 
        console.log(`user is ${user}`) 
        if(!user){
            return res.json({message:"user is not registered"})
        }
        const token = jwt.sign({ id: user._id }, "jwttokenkey", {
            expiresIn: "5m",
          });
        
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sakshi.sb2006@gmail.com',
      pass: 'lnbm txzg vqzd npic'
    }
  });

  const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E");
  var mailOptions = {
    from: 'sakshi.sb2006@gmail.com',
    to: email,
    subject: 'Reset Password',
    text: `http://localhost:5173/resetPassword`
    // /${encodedToken}
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        return res.json({message:"error sending email"})
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
    }catch(err){
        console.log(err)
    }

})

router.post("/resetpassword/:token", async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;
    try {
      const decoded = await jwt.verify(token, process.env.KEY);
      const id = decoded.id;
      const hashPassword = await bcrypt.hash(password, 10);
      await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
      return res.json({ status: true, message: "updated password" });
    } catch (err) {
      return res.json("invalid token");
    }
  });


export {router as UserRouter}