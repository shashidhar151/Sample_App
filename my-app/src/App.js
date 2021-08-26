import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import UserDetails from './components/UserDetails'
import UserDetailsContext from './Context/UserDetailsContext'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {
    id:2,
    usersList:[{ID:1,Name:"Shashi",
    Dob:"10 Aug 2016",
    Skills:"HTML",
    Hobbies:"Cricket",},],
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
  const {usersList, id,name,DOB,skills,hobbies} = this.state
  this.setState(prevState => ({id:prevState.id+1}))
  const detail={ID:id,Name:name,Dob:DOB,Skills:skills,Hobbies:hobbies}
  
  if (usersList.length === 1){
    this.onSubmitFailure()
  }else{
    this.setState(prevState => ({
      usersList: [...prevState.usersList, detail]
    })) 
  }

}

  render() {
    const {usersList,showSubmitError,name,DOB,skills,hobbies,username,password,showLoginError,errorMsg,nameCheck,passCheck}=this.state
    return (
      <UserDetailsContext.Provider
        value={{List:[...usersList],showSubmitError,name,DOB,skills,hobbies,username,password,showLoginError,errorMsg,nameCheck,passCheck, onChangeUsername:this.onChangeUsername,
          onChangePassword:this.onChangePassword ,onChangeNameCheck:this.onChangeNameCheck,onChangePassCheck:this.onChangePassCheck,onSubmitLoginFailure:this.onSubmitLoginFailure ,onChangeName:this.onChangeName,
          onChangeDob:this.onChangeDob,onChangeSkills:this.onChangeSkills,onChangeHobbies:this.onChangeHobbies,
          onSubmitFailure:this.onSubmitFailure,onSubmitForm:this.onSubmitForm}}
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
