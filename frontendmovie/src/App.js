import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Add_movie from './components/Add_movie';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Contact_us from './components/Contact_us';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/add' element={<Add_movie data={{Movie_Name:"",
  Released_year:"",
  Actor:"",
  Camera:"",
  Actress:"",
  Producer:"",
  Director:"",
  Language:""}} method="post"></Add_movie>}/>
        <Route path='/contact' element={<Contact_us></Contact_us>}/>
      </Routes>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
