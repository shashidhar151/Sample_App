import {Redirect, Route} from 'react-router-dom'
import UserDetailsContext from '../../Context/UserDetailsContext'

const ProtectedRoute = props => (
    <UserDetailsContext.Consumer>
    {value => {
      const {nameCheck,passCheck} = value
      if (!(nameCheck && passCheck)) {
        return <Redirect to="/login" />
      }
      return <Route {...props} />
    }}
      </UserDetailsContext.Consumer>
)


export default ProtectedRoute
