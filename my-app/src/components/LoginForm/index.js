import {Redirect} from 'react-router-dom'

import UserDetailsContext from '../../Context/UserDetailsContext'
import './index.css'
const users={
    name:"shashi",
    pass:"shashi@123"
}

const LoginForm =()=> (
  <UserDetailsContext.Consumer>
  {value => {
            const {username,password,showLoginError,errorMsg,nameCheck,passCheck,onChangeNameCheck,onChangePassCheck,onChangeUsername,
              onChangePassword,onSubmitLoginFailure} = value
  
  const changeUsername = event => {
    onChangeUsername(event.target.value)
  }

  const changePassword = eventPass => {
    onChangePassword(eventPass.target.value)
  }

  const onSubmitSuccess = () => {
    <Redirect to="/" />
  }

  const submitFailure = () => {
    onSubmitLoginFailure()  
  }

  const submitForm = async (event) => {
    event.preventDefault()
    if(username===users.name){
      onChangeNameCheck()
    }
    if(password===users.pass){
      onChangePassCheck()
    }
    console.log(nameCheck,passCheck)
    if (nameCheck && passCheck) {
      onSubmitSuccess()
    } else {
      submitFailure(nameCheck,passCheck)
    }
  }

    if (nameCheck && passCheck) {
      return <Redirect to="/" />
    }else{
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">      
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={changeUsername}
          placeholder="shashi"
        />
</div>
          <div className="input-container">        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={changePassword}
          placeholder="shashi@123"
        /></div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showLoginError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}}
</UserDetailsContext.Consumer>
)

export default LoginForm
