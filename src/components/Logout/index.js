// Write your code here
import './index.css'

const Logout = props => {
  const {changeStatus} = props

  return (
    <button type="button" className="btn-logout" onClick={changeStatus}>
      Login
    </button>
  )
}
export default Logout
