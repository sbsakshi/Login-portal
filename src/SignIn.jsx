import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {
    const[password,setPassword]=useState('')
    const[email,setEmail]=useState('')

    const navigate =useNavigate()


    axios.defaults.withCredentials =true;
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submit clicked")
    axios.post('http://localhost:3000/auth/signin',{email,password}).then(response=>{
      console.log(response)
      if(response.status){
        navigate('/home')
      console.log("repsonse")
      }}
      ).catch(
            err=>{console.log(err)}
       )
  }
    return (
    <div className="relative bg-white flex flex-col w-1/4 top-1/2 translate-y-1/2
    left-1/2 -translate-x-1/2 items-center border rounded-lg p-10  ">
    <div className="text-4xl p-4">SignIn</div>
    <form className="items-center " onSubmit={handleSubmit} >
     <input type="text" placeholder="Email Address" 
     onChange={(e)=>setEmail(e.target.value)}
     className="p-4 bg-slate-100 rounded-3xl block m-6 text-2xl">
    </input>
    <input type="password" placeholder="Password" 
         onChange={(e)=>setPassword(e.target.value)}
    className="p-4 bg-slate-100 rounded-3xl block ml-6 mr-6  text-2xl">
    </input>
    <p><Link to='/forgotPassword' className="text-blue-600 p-2 underline ml-6  hover:text-blue-400 transition-colors">Forgot Password?</Link> </p>
    <input type="submit" value="submit"
     className="border p-4 rounded-3xl bg-slate-400 pl-8 pr-8 m-4 text-2xl left-1/4 relative hover:bg-slate-500 transition-colors" 
     ></input>
           
     <p className="text-2xl">don't have an account?
      <Link to='/signup' className="text-blue-600 p-2 underline ml-2  hover:text-blue-400 transition-colors">signup</Link> </p>
    </form>
    </div>
  )
}

export default SignIn
