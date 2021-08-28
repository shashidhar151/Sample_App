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
  selectedTab: '',
  nameCheck:false,
  passCheck:false,
  onSubmitValues:false
})
export default UserDetailsContext