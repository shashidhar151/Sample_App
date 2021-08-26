import {AiFillDelete} from 'react-icons/ai'
import UserDetailsContext from '../../Context/UserDetailsContext'
import './index.css'

const UserCard = props => (
  <UserDetailsContext.Consumer>
  {value => {
    const {removeCardItem} = value

  const {eachList} = props
  const {ID,Name, Dob, Skills, Hobbies} = eachList
  const onClickBtn = () => {
    removeCardItem(ID)
  }
  return (
      <li className="product-item">
                <div className="list-card">
        <h1 className="data"><span className="title"> Name : </span>{Name}</h1>
        <p className="data"><span className="title">Date of Birth : </span>{Dob}</p>
          <p className="data"><span className="title">Tech. Skills :</span> {Skills}/-</p>
            <p className="data"><span className="title">Hobbies : </span>{Hobbies}</p>
            </div>
        <button type="button" onClick={onClickBtn} className="btn-title"><AiFillDelete/></button>

      </li>
  )
  }}
  </UserDetailsContext.Consumer>
)
export default UserCard