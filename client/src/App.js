import axios from 'axios'
import { useState, useEffect } from "react"
import ReactPlayer from 'react-player'

function App() {
  const [data,setData]=useState({})
  const [info,setInfo]=useState({
    name:'',
    img:''
  })

  useEffect(()=>{
    axios.get('http://localhost:5000/user/6261960ffd74ec06c34ff338')
    .then(response => setData(response.data));
  },[])


  console.log(data)

  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("file", info.img)
    formData.append("name", info.name)
    axios.post('http://localhost:5000/user/create-user',formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }

  console.log(data)
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input name='name' placeholder='name' onChange={(e)=>{setInfo({...info,name:e.target.value})}}/>
        <input type='file' onChange={(e)=>{setInfo({...info,img:e.target.files[0]})}}/>
        <button type='submit'>Submit</button>
      </form>

      <ReactPlayer url='https://www.twitch.tv/hadiplaysmusic' className='video' controls/>
    </div>
  );
}

export default App;
