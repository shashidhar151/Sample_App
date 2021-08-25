import React from 'react'

const UserDetailsContext = React.createContext({
  List: [],
  showSubmitError:false,
  name:"",
  DOB:"",
  skills:"",
  hobbies:"",
})
export default UserDetailsContext
