import {Link} from 'react-router-dom'

import './index.css'

const NavBar = () => (
        <nav className='nav-header navWhiteBgColor'>
          <img className="website-logo" src='https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png' alt="website logo" />
          <ul className="nav-sec">
            <li>
              <Link to="/" className='nav-link blackColorText'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/users" className='nav-link blackColorText'>
                User Details
              </Link>
            </li>
          </ul>
          <Link to="/login" className='nav-link blackColorText'>
                Login
              </Link>
        </nav>
)

export default NavBar
