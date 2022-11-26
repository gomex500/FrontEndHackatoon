import './Menu.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cubication from './components/Cubication';
import Login from './components/Login';
import Sign from './components/Sign';


function Menu() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cubication' element={<Cubication/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Sign/>}/>
      </Routes>
    </div>
  );
}

export default Menu;
