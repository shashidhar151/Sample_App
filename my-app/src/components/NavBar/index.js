import {Link} from 'react-router-dom'
import {AiFillHome,AiOutlineLogin,AiOutlineUsergroupAdd,AiOutlineLogout} from 'react-icons/ai'

import './index.css'
import UserDetailsContext from '../../Context/UserDetailsContext'

const NavBar = () => (
  <UserDetailsContext.Consumer>
  {value => {
    const {nameCheck,passCheck,onClickLogout,selectedTab,onClickHome,onClickUserDetails} = value

    const clickLogout = () => {
      onClickLogout()
      onClickHome()
    }

    const clickHome = () => {
      onClickHome()
    }

    const clickUserDetails = () => {
      onClickUserDetails()
    }
   
    const homeTab= selectedTab ==="home"? "selectedTabItem":"nav-link"
    const userTab= selectedTab ==="user"? "selectedTabItem":"nav-link"
    return(
        <nav className='nav-header'> 
 <ul className="nav-sec">
            <li>
              <Link to="/" className={homeTab} onClick={clickHome}>
              <AiFillHome/>    Home
              </Link>
            </li>
            <li>
              <Link to="/users" className={userTab} onClick={clickUserDetails}>
                <AiOutlineUsergroupAdd/> User Details
              </Link>
            </li>
          </ul>
          {(nameCheck && passCheck)?<Link to="/" className='nav-login-link'>
          <span className="log-icon" onClick={clickLogout}>Logout</span> <AiOutlineLogout />
              </Link> :           <Link to="/login" className='nav-login-link'>
          Login  <span className="log-icon"><AiOutlineLogin /></span>
              </Link>}

        </nav>
)
    }}
    </UserDetailsContext.Consumer>
)

export default NavBar
