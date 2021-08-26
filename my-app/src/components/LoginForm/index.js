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
    <Redirect to="/users" />
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
      return <Redirect to="/users" />
    }else{
    return (
      <div className="login-form-container">        
        <img
          src="https://www.goscience.eu/common/img/login.jpg"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={submitForm}>
<h1 className="login-heading">User Login</h1>
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
