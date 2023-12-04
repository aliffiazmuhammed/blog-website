import React from 'react'

function Navbar({username}) {
  return (
    <div className='navbar'>
      <div className='fbox'>
        <h1>{username}</h1>
      </div>
      <div className='sbox'>
        <button className='login'>write</button>
        <button className='login'>logout</button>
      </div>
    </div>
  )
}

export default Navbar
