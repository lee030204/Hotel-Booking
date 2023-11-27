import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom';
import SignUp from './Sign-Up';
import SignIn from './Login';
import SignInSide from './SignUpForm';


export default function NavBar(){
    return(
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg  bg-light shadow">
                <ul className="navbar-nav">
                    <li className="nav-items">
                        <Link to='/'className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/Login'className='nav-link'>Login</Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/Register'className='nav-link'>SignUp</Link>
                    </li>

                </ul>
                
            </nav>
            <Routes>
                    <Route exact path='/'></Route>
                    <Route extact path='/Login' element={<SignInSide />}></Route>
                    <Route extact path='/Register' element={<SignUp />}></Route>
                </Routes>
        </div>
    </Router>
    )
}