import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  onSubscribe = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      this.setState(() => ({status: 'Subscribed'}))
    } else {
      this.setState(() => ({status: 'Subscribe'}))
    }
  }

  render() {
    const {status} = this.state

    return (
      <div className="bg-Container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <div>
          <button className="button" type="submit" onClick={this.onSubscribe}>
            {status}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
