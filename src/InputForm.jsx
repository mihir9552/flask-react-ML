import React from "react";

class InputForm extends React.Component {
  claimRef = React.createRef();
  handleSubmit = event => {
    event.preventDefault();
    const claim = this.claimRef.current.value;
    this.props.addClaim(claim);
    $.ajax({
      type: "POST",
      url: "/test/",
      data: claim
    })
      .done(function(data) {
        // self.clearForm();
      })
      .fail(function(jqXhr) {
        console.log("failed to register");
      });
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
