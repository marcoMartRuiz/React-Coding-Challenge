import React, { Component } from 'react'
import 'Components/TextBox.css';


class TextBox extends Component {
   
  render() {
    return (
      <div> 
        <input className= {this.props.id} value= {this.props.output} style={{backgroundColor:this.props.colorchange}} onChange={this.props.changedValues} readOnly />
      </div>
    )
  }
}
export default TextBox;