import UserDetailsContext from '../../Context/UserDetailsContext'

import NavBar from '../NavBar'
import './index.css'

const Home =()=> (
    <UserDetailsContext.Consumer>
{value => {
          const {name,DOB,skills,hobbies,showSubmitError,onChangeName,onChangeDob,onChangeSkills,onChangeHobbies,onSubmitForm,onSubmitFailure} = value


        const ChangeName = event => {
            onChangeName(event.target.value)
          }
          const  ChangeDob = event => {
            onChangeDob(event.target.value)
          }
          const ChangeSkills = event => {
            onChangeSkills(event.target.value)
          }
          const  ChangeHobbies = event => {
            onChangeHobbies(event.target.value)
          }
          
          
          const  SubmitFailure = () => {
            onSubmitFailure()
          }
          
          const submitForm = event => {
            event.preventDefault()
            onSubmitForm()
          }

    return (
        
      <div className="home-form-container">
      <NavBar/>
        <form className="form-container" onSubmit={submitForm}>
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="name-input-field"
          value={name}
          onChange={ChangeName}
          placeholder="name"
        />
                       <label className="input-label" htmlFor="DOB">
          Date of Birth
        </label>
        <input
          type="text"
          id="DOB"
          className="name-input-field"
          value={DOB}
          onChange={ChangeDob}
          placeholder="Ex:15 Aug 2021"
        />
                <label className="input-label" htmlFor="skills">
                Skills
        </label>
        <input
          type="text"
          id="Skills"
          className="name-input-field"
          value={skills}
          onChange={ChangeSkills}
          placeholder="Skills"
        />
                <label className="input-label" htmlFor="Hobbies">
          Hobbies
        </label>
        <input
          type="text"
          id="Hobbies"
          className="name-input-field"
          value={hobbies}
          onChange={ChangeHobbies}
          placeholder="Ex:Cricket"
        />
          <button type="submit" className="login-button">
            Submit
          </button>
          {showSubmitError && <p className="error-message">*Please Enter All the Details</p>}
        </form>
      </div>

    )
}}
  </UserDetailsContext.Consumer>
)
export default Home
