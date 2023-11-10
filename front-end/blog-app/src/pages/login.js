import React from 'react'

function Login() {
  return (
    <div className='login'>
        <div className='innerbox'>
        <h1>USER LOG IN</h1>
        <form className='form'>
            <input className='formin' name="username" 
                type='text' 
                placeholder='username'/ >
            <input className='formin' type='password'
                name='password'
                placeholder='password'/>
        </form>
        </div>
      
    </div>
  )
}

export default Login
