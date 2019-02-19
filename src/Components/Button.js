import React, { Component } from 'react';

class Button extends Component {

    render() {
     
        return (
            <div>
                <button onClick={this.props.handleOnClick}  >{this.props.text}  </button>
            </div>
        );
    }
}

export default Button;
