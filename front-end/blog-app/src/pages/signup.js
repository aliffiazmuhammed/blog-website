import React from 'react'

function Signup() {
  return (
    <div>
      <div className='login'>
        <div className='innerbox'>
        <h1>USER SIGN UP</h1>
        <form className='form'>
            <input className='formin' name="username" 
                type='text' 
                placeholder='username'/ >
                <input className='formin' name="email" 
                type='email' 
                placeholder='email'/ >
            <input className='formin' type='password'
                name='password'
                placeholder='password'/>

        </form>
        </div>
      
    </div>
    </div>
  )
}

export default Signup
