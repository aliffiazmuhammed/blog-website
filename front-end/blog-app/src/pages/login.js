import React,{ useState } from 'react'

function Login() {

  const [input,setInput] = useState({
    username:'',
    password:''
  }); 
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handlechange =(e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  }

  return (
    <div className='login'>
        <div className='innerbox'>
        <h1>USER LOG IN</h1>
        <form className='form' onSubmit={handleSubmit}>
            <input className='formin' name="username" 
                type='text' 
                placeholder='username' onChange={handlechange}/ >
            <input className='formin' type='password'
                name='password'
                placeholder='password' onChange={handlechange}/>
                <button className='lbutton' >submit</button>
        </form>
        </div>

    </div>
  )
}

export default Login
