import React from "react";
import ReactDOM from "react-dom";
import InputForm from "./InputForm.jsx";
import Output from "./Output.jsx";

class App extends React.Component {
  state = {
    claims: ""
  };
  addClaim = claim => {
    this.setState({
      claims: claim
    });
  };
  render() {
    return (
      <div>
        <InputForm addClaim={this.addClaim} />
        <Output claim={this.state.claims} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
