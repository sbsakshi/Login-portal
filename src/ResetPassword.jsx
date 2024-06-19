import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
     const {token}=useParams()
  
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
        console.log('forgot pass')
      e.preventDefault();
      Axios.post("http://localhost:3000/auth/resetpassword/"+token, {
        password,
      }).then(response => {
          if(response.data.status) {
            console.log('password reset')
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
        <h2 className="pl-8">Reset Password</h2>
        <input
          type="password"
          placeholder="password"
          className="p-4 bg-slate-100 rounded-3xl block m-6 text-2xl"
          onChange={(e) => setPassword(e.target.value)}
        />
          <input type="password" placeholder="Confim Password" 
         onChange={(e)=>setConfirmPassword(e.target.value)}
    className="p-4 bg-slate-100 rounded-3xl block m-6 text-2xl">
    </input>
    <p className="text-red-500 ml-8">{
      ((password!==confirmPassword) && (password!=''))?"Password doesnt match":""
    }</p>

        <button type="submit" className="border p-4 rounded-3xl bg-slate-400 pl-8 pr-8 m-4 text-2xl left-1/4 relative hover:bg-slate-500 transition-colors">reset</button>
      </form>
    </div>
  )
}

export default ResetPassword