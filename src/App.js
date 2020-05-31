import React, { Component } from "react";
import stringCalculator from "string-calculator";
import Display from "./components/display";
import "./App.css";
import ClearDivide from "./components/clearDivide";
import Minus from "./components/min789";
import Plus from "./components/plus456";
import Space from "./components/space123";
import DotEquals from "./components/dotEquals";

let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let signs = ["+", "/", "x"];
let care = false;
let test = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      up: "",
      down: "0",
      op: "",
      result: "",
    };
  }
  removeCharacter(str, char_pos) {
  let part1 = str.substring(0, char_pos);
  let part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }


  hi = (e) => {
    let { up, down, op, result } = this.state;
    let num = e.target.innerHTML;
    test.push(num);
    if (test.length === 4) {
      test.shift();
    }
    console.log(test);

    if (test[test.length-1]===test[test.length-2] && 
      signs.includes(test[test.length-1]) && signs.includes(test[test.length-2])) {
      
      care = true;
    } else {
      care = false;
    }


    if(signs.includes(test[test.length-1]) && signs.includes(test[test.length-2])){
      console.log('siiii')
      console.log(this.state.op)
      console.log(this.removeCharacter('santiago','santiago'.length-2))
      console.log(this.removeCharacter(this.state.op,this.state.op[this.state.op.length-1]))
      /* this.setState({
        op: this.state.op.slice(0,this.state.op.length-2)+this.state.op.slice(this.state.op.length-1,this.state.op.length)
      }) */
      /* originalString.slice(0, position - 1) 
            + originalString.slice(position, originalString.length); */
    }
    
    if(care===false){

      if (num !== "=") {
        if (num === "x") {
          num = "*";
        }
  
        this.setState({
          down: num,
          up: (up += num),
          op: (op += num),
        });
      } else {
        this.setState({
          result: stringCalculator(op),
          down: stringCalculator(op),
          op: stringCalculator(op),
        });
      }
      if (num === "AC") {
        this.setState({
          up: "",
          down: "0",
          op: "",
          result: null,
        });
      }
    };
    }


  render() {
    return (
      <div className="App">
        <Display upText={this.state.up} downText={this.state.down} result />
        <div className="panel">
          <ClearDivide up={this.hi} />
          <Minus up={this.hi} />
          <Plus up={this.hi} />
          <Space up={this.hi} />
          <DotEquals up={this.hi} />
        </div>
      </div>
    );
  }
}

export default App;
