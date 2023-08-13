import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  changeStatus = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let msgEle
    let btnEle

    if (isLogin) {
      msgEle = <Message content="Welcome User" />
      btnEle = <Login changeStatus={this.changeStatus} />
    } else {
      msgEle = <Message content="Please Login" />
      btnEle = <Logout changeStatus={this.changeStatus} />
    }

    return (
      <div className="bg-con">
        <div className="card">
          {msgEle}
          {btnEle}
        </div>
      </div>
    )
  }
}
export default Home
