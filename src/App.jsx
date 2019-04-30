import React from "react";
import ReactDOM from "react-dom";
import InputForm from "./InputForm.jsx";
import Output from "./Output.jsx";
import "./styles.css";
import { Header, Segment } from "semantic-ui-react";

// const divStyle = {
//   width: "50vw"
// };

class App extends React.Component {
  state = {
    claims: {}
  };
  addClaim = claim => {
    this.setState({
      claims: claim
    });
  };

  render() {
    return (
      <div className="container">
        <div className="header">Patent-Claim Text Analyzer</div>
        <div className="app">
          <InputForm addClaim={this.addClaim} />
          <Output claim={this.state.claims} />
          <div className="clear" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
