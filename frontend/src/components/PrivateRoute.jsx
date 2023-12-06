import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.users)

  if (isLoggedIn) return children

  return <Navigate to='/auth' />
}

export default PrivateRoute