import NavBar from '../NavBar'
import UserCard from '../UserCard'
import UserDetailsContext from '../../Context/UserDetailsContext'
import './index.css'

const UserDetails =()=>(
        <UserDetailsContext.Consumer>
        {value => {
          const {List} = value
    return(
      <div className="user-form-container">
      <NavBar/>
      <ul className="user-list">
      {List.map(each => (
            <UserCard eachList={each} key={each.ID} />
          ))}
        </ul>
           </div>
    )
        }}
</UserDetailsContext.Consumer>
)
export default UserDetails
