import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Write() {
  const navigate = useNavigate();
    const [input,setInput] = useState({
        title:'',
        description:'',
      });

    const [user,setUser] = useState({});


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


      useEffect(() => {
        // Update the input state with the correct uid when user state changes
        setInput((prevInput) => ({
          ...prevInput,
          uid: user.id,
        }));
      }, [user]);
      const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          console.log(input)
          const res = await axios.post("http://localhost:8800/api/posts/write-post", input);
          console.log(res)
          if(res.data.status){
            navigate('/')
          }
          
        } catch (error) {
          console.log(error)
        }
        
    
        
      };
      
    const handlechange =(e)=>{
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input)
  }


  return (
    <div className='write'>
      <div className='innerbox'>
        <h1>WRITE BLOG</h1>
        <form className='form' >
            <input className='formin' name="title" 
                type='text' 
                placeholder='title' onChange={handlechange}/ >
            <textarea className='formin' type='textarea'
                name='description' maxLength='10000'
                placeholder='description' onChange={handlechange}/>
                <button className='lbutton' onClick={handleSubmit}>submit</button>
        </form>
        </div>
    </div>
  )
}

export default Write
