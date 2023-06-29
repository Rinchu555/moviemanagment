import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h5'>Movie Managment App</Typography>&nbsp;&nbsp;&nbsp;
            <Button variant='contained'>
              <Link to={'/'}style={{textDecoration:'none', color:'white'}}>Home</Link>
              </Button>&nbsp;&nbsp;&nbsp;
            <Button variant='contained'>
            <Link to={'/add'} style={{textDecoration:'none', color:'white'}}>Add Movie</Link>
              </Button>&nbsp;&nbsp;&nbsp;
            <Button variant='contained'>
              <Link to={'/contact'} style={{textDecoration:'none', color:'white'}}>Contact_Us</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
