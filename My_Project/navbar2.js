import React from 'react'; // Make sure to import React if it's not included here already
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Pricing from './navbar';
import SignUp from './signin';
import SignIn from './Login';
import { Button } from '@mui/material';
import Contact from './contactus';
import About from './About';

export default function NavBar() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-white" style={{ justifyContent: "flex-end" }}>
          <ul className="navbar-nav" >
            <li className="nav-items">
              <Button component={RouterLink} to='/' className='nav-link' style={{ color: 'black' }}>Home</Button>
            </li>
            <li className="nav-items">
              <Button component={RouterLink} to='/about' className='nav-link' style={{ color: 'black' }}>About</Button>
            </li>
            <li className="nav-items">
              <Button component={RouterLink} to='/contact' className='nav-link' style={{ color: 'black' }}>Contact Us</Button>
            </li>
            <li className="nav-items">
              <Button component={RouterLink} to='/Login' className='nav-link' style={{ color: 'black' }}>Login</Button>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route exact path='/' element={<Pricing />} />
        <Route exact path='/Login' element={<SignIn />} />
        <Route exact path='/Register' element={<SignUp />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </Router>
  );
}
