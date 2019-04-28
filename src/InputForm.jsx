import React from "react";

class InputForm extends React.Component {
  claimRef = React.createRef();
  handleSubmit = event => {
    event.preventDefault();
    const claim = this.claimRef.current.value;
    
    fetch('/test/', {
      method: 'post',
      body: claim
    })
    .then(response => (response.json()))
    .then((response)=>this.props.addClaim(response));
    // console.log("test_x: "+ test_x)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Claim:
          <textarea name="claim" ref={this.claimRef} placeholder="Claim" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default InputForm;
