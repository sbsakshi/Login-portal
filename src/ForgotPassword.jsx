import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
        console.log('forgot pass')
      e.preventDefault();
      Axios.post("http://localhost:3000/auth/forgotpassword", {
        email,
      }).then(response => {
        console.log(`this is response ${response}`)
        console.log(response)
          if(response.data.status) {
            console.log('display alert')
            alert("check you email for reset password link")
              navigate('/login')
          }
          
      }).catch(err => {
          console.log(err)
      })
    };
  return (
    <div className="relative bg-white flex flex-col w-1/4 top-1/2 translate-y-1/2
    left-1/2 -translate-x-1/2 items-center border rounded-lg p-10">
      <form className="text-4xl p-4 " onSubmit={handleSubmit}>
        <h2 className="pl-8">Forgot Password</h2>
                <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          className="p-4 bg-slate-100 rounded-3xl block m-6 text-2xl"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="border p-4 rounded-3xl bg-slate-400 pl-8 pr-8 m-4 text-2xl left-1/4 relative hover:bg-slate-500 transition-colors">Send</button>
      </form>
    </div>
  )
}

export default ForgotPassword