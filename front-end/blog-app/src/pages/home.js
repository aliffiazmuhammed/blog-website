import React, { useEffect,useState } from 'react'
import Navbar from '../components/navbar'
import HomeContent from '../components/HomeContent'
import {useNavigate} from 'react-router-dom'

function Home() {

  const [user,setUser] = useState({});

  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('blog-app')){
      navigate('/login');
    }
  },[])

  useEffect(()=>{
    const getuserdata = async()=>{
      try {
        const users=await JSON.parse(localStorage.getItem('blog-app'));
        setUser(users) 
        
      } catch (error) {
        console.log(error)
      }
    }
    getuserdata();
    
  },[])

  return (
    <div className='home'>
      <Navbar username={user.username}/>
      <HomeContent userid={user.id}/>
      <h1></h1>
    </div>
  )
}

export default Home
