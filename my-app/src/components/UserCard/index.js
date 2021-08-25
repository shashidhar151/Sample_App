import './index.css'

const UserCard = props => {
  const {List} = props
  const {ID,Name, Dob, Skills, Hobbies} = List
console.log(List)
    console.log(Name)
  return (
      <li className="product-item">
        <h1 className="title">{Name}</h1>
        <p className="brand">{Dob}</p>
        <div className="product-details">
          <p className="price">{Skills}/-</p>
          <div className="rating-container">
            <p className="rating">{Hobbies}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
  )
}
export default UserCard