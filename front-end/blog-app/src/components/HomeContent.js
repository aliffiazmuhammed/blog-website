import React, { useEffect, useState } from 'react'
import axios from 'axios'

function HomeContent({userid}) {

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
}, [userid]);


  useEffect(() => {
    console.log(data); // Ensure this is placed correctly
  }, [data]); // Dependency on data
  
  const handleClick = (id) => {
    // Handle the click with the id
    console.log(`Button clicked for row with id: ${id}`);
  };


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
                          <td ><button onClick={() => handleClick(d.id)}>{d.title}</button></td>
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
