export const checkemail=(email)=>{
    let checkEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    if(!checkEmail) return "Enter a valid email address"
}
    

    //returns true or false 
// if(!checkPass) return "Enter a valid password"

return null;
