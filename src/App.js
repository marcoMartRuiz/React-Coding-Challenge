import React, { Component } from 'react';
import './App.css';
import Button from 'Components/Button';
import TextBox from 'Components/TextBox';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello World",
      color: "white",
      toggleText:false,
    
    }
    this.handleOnClick1= this.handleOnClick1.bind(this);
    this.handleOnClick2= this.handleOnClick2.bind(this);;
    this.handleOnClick3= this.handleOnClick3.bind(this);
    this.handleOnClick4= this.handleOnClick4.bind(this);
  
  }


  handleOnClick1() { 
    this.setState({ color: "blue" });
    
  }

  handleOnClick2() { 
    this.setState({ color: "red" }, () =>{
      if(this.state.color==="red" && this.state.message==="Bar"){
        this.setState({counter: this.state.counter+1});
      }
    });
  }

  handleOnClick3() {
    if(this.state.toggleText === false){
      this.setState({message: "Fu"});  
    }else{
      this.setState({message: "Bar"},() =>{
        if(this.state.color==="red" && this.state.message==="Bar"){
          this.setState({counter: this.state.counter+1});
        }
      });
    }
    this.setState({toggleText:!this.state.toggleText});
  }

  handleOnClick4() {
     this.setState({color:"white"});
     this.setState({message:"Hello World"});
     this.setState({counter: 0});
  }

  render() {

    return (
      <div className="App">
        <div className="container-textbox">

          <TextBox id="display-box" output={this.state.message}  colorchange={this.state.color} />
          <TextBox id="display-counter" output={this.state.counter}  />

        </div>
        <div className="container-buttons">

          <Button text="Click Me" id="button1" handleOnClick={this.handleOnClick1} />
          <Button text="Click Me" id="button2" handleOnClick={this.handleOnClick2} />
          <Button text="Click Me" id="button3" handleOnClick={this.handleOnClick3} />
          <Button text="Click Me" id="button4" handleOnClick={this.handleOnClick4} />

        </div>
      </div>
    );
  }
}

export default App;
