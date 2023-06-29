import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Add_movie from './Add_movie';

const Home = () => {
  var[movie,setMovie]=useState([]);
  var[update,setUpdate]=useState(false);
  var[singleValue,setSingleValue]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3001/viewmovies")
    .then((response)=>{
      console.log(response.data)
      setMovie(response.data);
    })
  },[])
const updateValues=(value)=>{
   console.log("update clicked");
   setUpdate(true);
   setSingleValue(value)
}
  var deleteValues=(id)=>{
    console.log(id);
    axios.delete("http://localhost:3001/deletemovies/"+id)
    .then((response)=>{
      alert("Movie deleted");
      window.location.reload(false)
    })
    .catch(err=>console.log(err))
  }
  var finalJSX=<TableContainer style={{paddingTop:'100px'}}>
  <Table>
      <TableHead>
          <TableRow>
              <TableCell>Movie Name</TableCell>
              <TableCell>Released year</TableCell>
              <TableCell>Actor</TableCell>
              <TableCell>Camera</TableCell>
              <TableCell>Actress</TableCell>
              <TableCell>Producer</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Language</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
        {movie.map((val,i)=>{
          return(
            <TableRow key={i}>
              <TableCell>{val.Movie_Name}</TableCell>
              <TableCell>{val.Released_year}</TableCell>
              <TableCell>{val.Actor}</TableCell>
              <TableCell>{val.Camera}</TableCell>
              <TableCell>{val.Actress}</TableCell>
              <TableCell>{val.Producer}</TableCell>
              <TableCell>{val.Director}</TableCell>
              <TableCell>{val.Language}</TableCell>
              <TableCell>
                <Button onClick={()=>updateValues(val)}>Edit</Button>
                <Button onClick={()=>deleteValues(val._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
  </Table>
</TableContainer>
if(update) finalJSX=<Add_movie data={singleValue} method='put'/>
  return finalJSX;
};

export default Home
