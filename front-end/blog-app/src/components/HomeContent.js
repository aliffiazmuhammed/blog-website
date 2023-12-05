import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function HomeContent({userid}) {
  const navigate = useNavigate();

  const [data,setdata] = useState([])
  const input = {uid:userid}

useEffect(() => {
  const getuserdata = async () => {
    try {
      const idata = await axios.get("http://localhost:8800/api/posts/get-post", {
        params: input,
      });
      setdata(idata.data.dat);
    } catch (error) {
      console.log(error);
    }
  };

  getuserdata();
}, [userid,data]);


  useEffect(() => {
    console.log(data); // Ensure this is placed correctly
  }, [data]); // Dependency on data
  
  const handleClick = (id) => {
    // Handle the click with the id
    navigate(`/post/${id}`);
  };

  const handledelete=async(id)=>{
    try {
      const data = await axios.post("http://localhost:8800/api/posts/delete-post",{
      id: id,
      })
      setdata((prevData) => prevData.filter(post => post.id !== id));
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='homecontent'>
    <div className='heading'>
    <h1 >MY BLOGS</h1>
    </div>
      
      <div className='table'>
      <table className='tab'>
  <tr>
    <th>index</th>
    <th>tiltle</th>
  </tr>
  {
                data.map((d,index)=>{
                    return(
                        <tr key={d.id}>
                          <td >{index}</td>
                          <td ><button onClick={() => handleClick(d.id)} className='hbutton'>{d.title}</button></td>
                          <td><button className='h2button' onClick={() => handledelete(d.id)}>delete</button></td>
                        </tr>
                    )
                })
            }
  
</table>
      </div>
      
    </div>
  )
}

export default HomeContent
