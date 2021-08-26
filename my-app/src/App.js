import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import UserDetails from './components/UserDetails'
import UserDetailsContext from './Context/UserDetailsContext'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const initialList = [
  {ID:uuidv4(),Name:"Shashi",
    Dob:"10 Aug 2016",
    Skills:"HTML",
    Hobbies:"Cricket",},
    {ID:uuidv4(),Name:"Raju",
    Dob:"15 May 2010",
    Skills:"CSS",
    Hobbies:"Football",},
  {
    id: uuidv4(),
    Name: "Ramesh",
    Dob: "5 Apr 2009",
    Skills: "Java Script",
    Hobbies:"Basket Ball"
  },
]


class App extends Component {
  state = {
    usersList:initialList,
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
}

onChangeUsername = valueUser => {
  this.setState({username: valueUser})
}

onChangePassword = valuePass => {
  this.setState({password: valuePass})
}

onChangeNameCheck = () => {
  this.setState({nameCheck:true})
}

onChangePassCheck = () => {
  this.setState({passCheck:true})
}
onSubmitLoginFailure = () => {
    this.setState({showLoginError: true, errorMsg:"*incorrect username or password"})
}

onChangeName = event => {
  this.setState({name: event})
}

onChangeDob = event => {
  this.setState({DOB: event})
}

onChangeSkills = event => {
  this.setState({skills: event})
}

onChangeHobbies = event => {
  this.setState({hobbies: event})
}

onSubmitFailure = () => {
    this.setState({showSubmitError: true}) 
}

onSubmitForm = () => {
  const {name,DOB,skills,hobbies} = this.state
  const detail={ID:uuidv4(),Name:name,Dob:DOB,Skills:skills,Hobbies:hobbies}
  if (name!=="" && DOB!=="" && skills!=="" && hobbies!==""){
    this.setState(prevState => ({
      usersList: [...prevState.usersList, detail]
    }))
  }else{
    this.onSubmitFailure() 
  }
  console.log(detail)
}

removeCardItem = async ID => {
  const {usersList} = this.state
  console.log(ID)
  const updatedUsersList = usersList.filter(
    each => each.ID !== ID,
  )
  
  this.setState({usersList: updatedUsersList})
  console.log(updatedUsersList)
}

  render() {
    const {usersList,showSubmitError,name,DOB,skills,hobbies,username,password,showLoginError,errorMsg,nameCheck,passCheck}=this.state
    
    return (
      <UserDetailsContext.Provider
        value={{List:[...usersList],showSubmitError,name,DOB,skills,hobbies,username,password,showLoginError,errorMsg,nameCheck,passCheck, onChangeUsername:this.onChangeUsername,
          onChangePassword:this.onChangePassword ,onChangeNameCheck:this.onChangeNameCheck,onChangePassCheck:this.onChangePassCheck,onSubmitLoginFailure:this.onSubmitLoginFailure ,onChangeName:this.onChangeName,
          onChangeDob:this.onChangeDob,onChangeSkills:this.onChangeSkills,onChangeHobbies:this.onChangeHobbies,
          onSubmitFailure:this.onSubmitFailure,onSubmitForm:this.onSubmitForm,removeCardItem:this.removeCardItem}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/users" component={UserDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
        </UserDetailsContext.Provider>     
    )
  }
}

export default App
