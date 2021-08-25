import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './components/Home'
import LoginForm from './components/LoginForm'
import UserDetails from './components/UserDetails'
import UserDetailsContext from './Context/UserDetailsContext'
import NotFound from './components/NotFound'
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
    hobbies:""
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
  const {showSubmitError} = this.state
  if(showSubmitError===true){
      this.setState({showSubmitError: true})
  }    
}

onSubmitForm = () => {
  const {id,name,DOB,skills,hobbies} = this.state
  this.setState(prevState => ({id:prevState.id+1}))
  const detail={ID:id,Name:name,Dob:DOB,Skills:skills,Hobbies:hobbies}
  this.setState(prevState => ({
    usersList: [...prevState.usersList, detail]
  }))
}

  render() {
    const {usersList,showSubmitError,name,DOB,skills,hobbies}=this.state
    console.log(usersList)
    return (
      <UserDetailsContext.Provider
        value={{List:[...usersList],showSubmitError,name,DOB,skills,hobbies,onSubmitSuccess:this.onSubmitSuccess,onChangeName:this.onChangeName,
          onChangeDob:this.onChangeDob,onChangeSkills:this.onChangeSkills,onChangeHobbies:this.onChangeHobbies,
          onSubmitFailure:this.onSubmitFailure,onSubmitForm:this.onSubmitForm}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/users" component={UserDetails} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
        </UserDetailsContext.Provider>     
    )
  }
}

export default App
