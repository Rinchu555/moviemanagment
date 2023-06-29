import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Contact_us = () => {
  const[data,setData]=useState({name:"",phone:"",email:"",message:""});

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData({...data,[name]:value})
  
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(data)

  }

  return (
    <div style={{paddingTop:'100px'}}>
      <form method="post" onSubmit={handleSubmit}></form>
      <h2>Get in Touch</h2>
      <br /><br /><br />
      <TextField name= "name" color="success" label="Name" onChange={handleChange} value={data.name}focused>Name</TextField>
      <br /><br />
      <TextField name= "email" color="success" label="Email" onChange={handleChange} value={data.email} focused>Email</TextField>
      <br /><br />
      <TextField name= "phone" color="success" label="Phone" onChange={handleChange} value={data.phone} focused>Phone</TextField>
      <br /><br /><br />
      <TextField name= "message" color="success" label="Message" onChange={handleChange} value={data.message} focused>Message</TextField>
      <br /><br /><br />
      
      <Button variant="contained" color="success">Send</Button>
      
  
      
    </div>
  )
}

export default Contact_us
