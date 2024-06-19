import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
    const[email,setemail]=useState('')
    const[confimPassword,setConfirmPassword]=useState('')

    const navigate =useNavigate()

    const checkemail = (email) => {
      return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    }

    const checkPass=(password)=>{
      return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
      }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submit clicked")
    axios.post('http://localhost:3000/auth/signup',{username,email,password}).then(response=>{
      if(response){
        console.log(response)
        alert("You have succesfully signed in")
       navigate('/signin')
      }}
      ).catch(
            err=>{console.log(err)}
        )
  }
    return (
    <div className="relative bg-white flex flex-col w-1/4  translate-y-1/4
    left-1/2 -translate-x-1/2 items-center border rounded-lg p-10 ">
    <div className="text-4xl p-4">SignUp</div>
    <form className=" " onSubmit={handleSubmit}>
    <input type="text" placeholder="username" 
     onChange={(e)=>setusername(e.target.value)}
     className="p-4 bg-slate-100 rounded-3xl block m-6 text-2xl">
    </input>
     <input type="text" placeholder="Email Address" 
     onChange={(e)=>setemail(e.target.value)}
     className="p-4 bg-slate-100 rounded-3xl block m-6 text-2xl">
    </input>
    <p className="text-red-500 ml-8">{ (email!= '')? (checkemail(email)? '' : 'Invalid Email') : '' }</p>
    <input type="password" placeholder="Password" 
         onChange={(e)=>setpassword(e.target.value)}
    className="p-4 bg-slate-100 rounded-3xl block m-6 text-2xl">
    </input>
    <p className="text-red-500 ml-8">{ (password!= '')? (checkPass(password)? '' : 'Invalid password') : '' }</p>
    <input type="password" placeholder="Confim Password" 
         onChange={(e)=>setConfirmPassword(e.target.value)}
    className="p-4 bg-slate-100 rounded-3xl block m-6 text-2xl">
    </input>
    <p className="text-red-500 ml-8">{
      ((password!==confimPassword) && (password!=''))?"Password doesnt match":""
    }</p>
    <input type="submit" value="submit"
     className="border p-4 rounded-3xl bg-slate-400 pl-8 pr-8 m-4 text-2xl left-1/4 relative hover:bg-slate-500 transition-colors
      " 
     ></input>
     <p  className="text-2xl">have an account?
      <Link to='/signin' className="text-blue-600 p-2  underline hover:text-blue-400 transition-colors">signin</Link> </p>
    </form>
    </div>
  )
}

export default SignUp
