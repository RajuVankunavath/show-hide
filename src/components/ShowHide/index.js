import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onclickFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onclickLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container-hide">
          <div className="container-name-hide">
            <button
              type="button"
              className="button-container"
              onClick={this.onclickFirstName}
            >
              Show/Hide FirstName
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="container-name-hide">
            <button
              className="button-container"
              type="button"
              onClick={this.onclickLastName}
            >
              Show/Hide LastName
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
