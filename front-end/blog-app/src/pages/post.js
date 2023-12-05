import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Post() {
    const { id } = useParams();

    const [data,setdata] = useState([])
    useEffect(() => {
        const getuserdata = async () => {
          try {
            const idata = await axios.get("http://localhost:8800/api/posts/show-post", {
              params: {id},
            });
            setdata(idata.data.dat);
          } catch (error) {
            console.log(error);
          }
        };
      
        getuserdata();
      }, [id]);

      useEffect(() => {
        console.log(data); // Ensure this is placed correctly
      }, [data]);

    return (
      <div>
        {
                data.map((d,index)=>{
                    return(
                        <div className='post' key={d.uid}>
                            <div className='title'>
                            <h1>{d.title}</h1>
                            </div>
                            <div className='description'>
                            <p>{d.description}</p>
                            </div>
                        </div>
                        
                    )
                })
            }
      </div>
    );
}

export default Post
