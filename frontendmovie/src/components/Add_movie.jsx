import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Add_movie = (props) => {
  var navigate = useNavigate();

  var[inp,setInp]=useState(props.data);
  console.log("props data",props.data);
  console.log("props method",props.method);
  const inputHandler=(e)=>{
    const{name,value}=e.target;
    setInp((inp)=>({...inp,[name]:value}))
    console.log(inp)
  }

  const addHandler=()=>{
    console.log("clicked");
    if(props.method==="post"){

    axios.post("http://localhost:3001/addmovies",inp)
    .then((response)=>{
      alert("Movie added");
      navigate('/')
    })
    .catch(err=>console.log(err))
  };
  if(props.method==="put"){
    axios.put("http://localhost:3001/edit/"+inp._id,inp)
    .then((response)=>{
      alert("Updated");
      window.location.reload(false)
    })
  }
}

  return (
    
    <div style={{paddingTop:'100px'}}>
      <h2>Add Movie</h2>
      <TextField name="Movie_Name" value={inp.Movie_Name} onChange={inputHandler} label="Movie Name" variant="outlined" color="secondary" focused/>&nbsp;&nbsp;
      <TextField name="Released_year" value={inp.Released_year} onChange={inputHandler}label="Released year" variant="outlined" color="secondary" focused />
      <br/><br/><br/>
      <TextField name="Actor" value={inp.Actor} onChange={inputHandler} label="Actor" color="secondary" focused />&nbsp;&nbsp;
      <TextField name="Camera" value={inp.Camera} onChange={inputHandler} label="Camera" color="secondary" focused />
      <br/><br/><br/>
      <TextField name="Actress" value={inp.Actress} onChange={inputHandler} label="Actress" color="secondary" focused />&nbsp;&nbsp;
      <TextField name="Producer" value={inp.Producer} onChange={inputHandler} label="Producer" color="secondary" focused />
      <br/><br/><br/>
      <TextField name="Director" value={inp.Director} onChange={inputHandler} label="Director" color="secondary" focused />&nbsp;&nbsp;
      <TextField name="Language" value={inp.Language} onChange={inputHandler} label="Language" color="secondary" focused />
      <br/><br/><br/>
      {/* <TextField name='Movie_Name' value={inp.Movie_Name} onChange={inputHandler} label="Movie_Name"/>
      <TextField name='Camera' value={inp.Camera} onChange={inputHandler} label="Camera" color="secondary" focused /> */}
      <Button variant="contained" onClick={addHandler} >Add</Button>

    </div>
  )
}

export default Add_movie
