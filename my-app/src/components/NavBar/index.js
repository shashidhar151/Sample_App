import {Link} from 'react-router-dom'
import {AiFillHome,AiOutlineLogin,AiOutlineUsergroupAdd} from 'react-icons/ai'

import './index.css'

const NavBar = () => (
        <nav className='nav-header'>
 <ul className="nav-sec">
            <li>
              <Link to="/" className='nav-link'>
              <AiFillHome/>    Home
              </Link>
            </li>
            <li>
              <Link to="/users" className='nav-link'>
                <AiOutlineUsergroupAdd/> User Details
              </Link>
            </li>
          </ul>
          <Link to="/login" className='nav-login-link'>
          <AiOutlineLogin/>Login
              </Link>
        </nav>
)

export default NavBar
