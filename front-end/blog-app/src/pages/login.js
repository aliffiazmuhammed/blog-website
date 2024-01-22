import React,{ useState,useReducer } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

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
    password:''
  }); 
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", input);
      
      if(res.data.status){
        localStorage.setItem('blog-app',JSON.stringify(res.data.user));
        navigate('/')
        console.log(res.data.user.id)
      }
    } catch (error) {
      toast.error("invalid login", vallidationFormat );
      console.log(error)
    }
    

    
  };


  const handlechange =(e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  }

  return (
<>
    <div className='login'>
        <div className='innerbox'>
        <h1>USER LOG IN</h1>
        <form className='form' >
            <input className='formin' name="username" 
                type='text' 
                placeholder='username' onChange={handlechange} autoComplete='off'/ >
            <input className='formin' type='password'
                name='password'
                placeholder='password' onChange={handlechange} autoComplete='off'/>
                <p>not yet <a href='/signup'>registred</a>?</p>
                <button className='lbutton' onClick={handleSubmit}>submit</button>
        </form>
        
        </div>
        
    </div>
    <ToastContainer/>
    </>
    
  
    
  )
}

export default Login
