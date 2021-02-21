// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: '',
  };
  

  onChange=(event)=>{
    this.setState({
      name: event.target.value
    })
  }

  onSubmit=(event)=>{
    event.preventDefault()
    console.log("button submitted", this.props.addBand)
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.onSubmit}>
          <label>add band</label>
          <input onChange={this.onChange} type="text" value={this.state.name}></input>
          <input type="submit" />
        </form>

      </div>
    )
  }
}

export default BandInput
