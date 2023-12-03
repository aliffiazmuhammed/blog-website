import React, { useState } from 'react'
import axios from "axios"

function Signup() {
  const [input,setInput] = useState({
    username:'',
    email:'',
    password:''
  }); 
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", input);
      console.log(res);
    } catch (error) {
      console.error('Axios Error alif:', error);
    }
  };


  const handlechange =(e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  }
  return (
    <div>
      <div className='login'>
        <div className='innerbox'>
        <h1>USER SIGN UP</h1>
        <form className='form' >
            <input className='formin' name="username" 
                type='text' 
                placeholder='username' onChange={handlechange}/ >
                <input className='formin' name="email" 
                type='email' 
                placeholder='email' onChange={handlechange}/ >
            <input className='formin' type='password'
                name='password'
                placeholder='password' onChange={handlechange}/>
            <button className='lbutton' onClick={handleSubmit}>submit</button>
        </form>
        </div>
      
    </div>
    </div>
  )
}

export default Signup
