import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const vallidationFormat = {
    position: "top-right",
    autoClose: 8000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    }
  const navigate = useNavigate();
  const [input,setInput] = useState({
    username:'',
    email:'',
    password:''
  }); 
  const handleSubmit = async(e) => {
    e.preventDefault();
    if(input.password===''||input.submit===''||input.email===''){
      toast.error("Field empty", vallidationFormat );
    }else{
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", input);
      console.log(res);
      if(res.status){
        navigate('/login')
      }
    } catch (error) {
      toast.error("user already exist", vallidationFormat );
      console.error('Axios Error alif:', error);
    }}
  };


  const handlechange =(e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  }
  return (
    <>
    <div>
      <div className='login'>
        <div className='innerbox'>
        <h1>USER SIGN UP</h1>
        <form className='form' >
            <input className='formin' name="username" 
                type='text' 
                placeholder='username' onChange={handlechange} autoComplete='off'/ >
                <input className='formin' name="email" 
                type='email' 
                placeholder='email' onChange={handlechange} autoComplete='off'/ >
            <input className='formin' type='password'
                name='password'
                placeholder='password' onChange={handlechange} autoComplete='off'/>
                <p>already <a href='/login'>registered</a>?</p>
            <button className='lbutton' onClick={handleSubmit}>submit</button>
        </form>
        </div>
      
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Signup
