import React from "react";

class Output extends React.Component {
  render() {
    const res = this.props.claim ? this.props.claim.result : "";
    const acceptance = this.props.claim ? this.props.claim.acceptance : "";
    const rejection = this.props.claim ? this.props.claim.rejection : "";
    return (
      <div className="OutputForm">
        <div className="result">
          <h1>Acceptance: {acceptance}</h1>
          <h1>Rejection: {rejection}</h1>
        </div>
      </div>
    );
  }
}

export default Output;
