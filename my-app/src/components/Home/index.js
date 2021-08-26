import UserDetailsContext from '../../Context/UserDetailsContext'

import NavBar from '../NavBar'
import './index.css'

const Home =()=> (
    <UserDetailsContext.Consumer>
{value => {
          const {name,DOB,skills,hobbies,showSubmitError,onChangeName,onChangeDob,onChangeSkills,onChangeHobbies,onSubmitForm} = value


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
          
          const submitForm = event => {
            event.preventDefault()
            onSubmitForm()
          }
    return ( 
      <div className="home-container">
      <NavBar/>
      <div className="home-form-container">
      <h1 className="home-heading">Please Provide Your Details</h1>
        <form className="form-container" onSubmit={submitForm}>
        <label className="home-input-label" htmlFor="name">
          Name :
        </label>
        <input
          type="text"
          id="name"
          className="home-input-field "
          value={name}
          onChange={ChangeName}
          placeholder="Name"
        />
                       <label className="home-input-label" htmlFor="DOB">
          Date of Birth :
        </label>
        <input
          type="text"
          id="DOB"
          className="home-input-field"
          value={DOB}
          onChange={ChangeDob}
          placeholder="Ex:15 Aug 2021"
        />
                <label className="home-input-label" htmlFor="skills">
                Skills :
        </label>
        <input
          type="text"
          id="Skills"
          className="home-input-field"
          value={skills}
          onChange={ChangeSkills}
          placeholder="Skills"
        />
                <label className="home-input-label" htmlFor="Hobbies">
          Hobbies :
        </label>
        <input
          type="text"
          id="Hobbies"
          className="home-input-field"
          value={hobbies}
          onChange={ChangeHobbies}
          placeholder="Ex:Cricket"
        />
        {showSubmitError && <p className="error-message">**Please Enter All the Details</p>}
          <button type="submit" className="login-button">
            Submit :
          </button>
          
        </form>
      </div>
</div>
    )
}}
  </UserDetailsContext.Consumer>
)
export default Home
