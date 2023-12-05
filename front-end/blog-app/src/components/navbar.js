import React from 'react'
import {useNavigate} from 'react-router-dom'

function Navbar({username}) {
  const navigate = useNavigate();
  const handlewrite =()=>{
    navigate('/write')
  }

  const handlelogout =()=>{
    localStorage.clear();
    window.location.reload()
  }
  return (
    <div className='navbar'>
      <div className='fbox'>
        <h1>{username}</h1>
      </div>
      <div className='sbox'>
        <button className='login' onClick={handlewrite}>write</button>
        <button className='login' onClick={handlelogout}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
