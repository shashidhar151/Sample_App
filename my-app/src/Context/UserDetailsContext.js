import React from 'react'

const UserDetailsContext = React.createContext({
  List: [],
  showSubmitError:false,
  name:"",
  DOB:"",
  skills:"",
  hobbies:"",
  username: '',
  password: '',
  showLoginError: false,
  errorMsg: '',
  nameCheck:false,
  passCheck:false,
})
export default UserDetailsContext