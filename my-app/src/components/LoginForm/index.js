import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import './index.css'
const users={
    name:"shashi",
    pass:"shashi@123"
}
class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    nameCheck:false,
    passCheck:false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = () => {
    const {nameCheck} = this.state
    if(nameCheck===true){
        this.setState({showSubmitError: true, errorMsg:"*incorrect username"})
    }else{
        this.setState({showSubmitError: true, errorMsg:"*incorrect password"})
    }
    
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password,nameCheck,passCheck} = this.state
    if(username===users.name){
        this.setState({nameCheck: true})
    }
    if(password===users.pass){
        this.setState({passCheck: true})
    }
    if (nameCheck && passCheck) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="shashi@123"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="shashi"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg,nameCheck,passCheck} = this.state
    if (nameCheck && passCheck) {
      return <Redirect to="/" />
    }
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
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
