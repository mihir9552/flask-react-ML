import React from "react";

class Output extends React.Component {
  render() {
    return <h1>{this.props.claim ? this.props.claim : "nothing here"}</h1>;
  }
}

export default Output;
