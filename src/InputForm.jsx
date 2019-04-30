import React from "react";
// import "semantic-ui-css/semantic.min.css";
import { Button, Form, TextArea } from "semantic-ui-react";

class InputForm extends React.Component {
  claimRef = React.createRef();
  handleSubmit = event => {
    event.preventDefault();
    const claim = this.claimRef.current.ref.current.value;
    console.log(this.claimRef.current.ref.current.value);

    fetch("/test/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(claim)
      // body: claim
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(response => {
        console.log(response);
        return this.props.addClaim(response);
      });
  };
  render() {
    return (
      <div className="InputForm">
        <Form onSubmit={this.handleSubmit} className="form">
          <label className="label">Enter your text:</label>
          <Form.Field>
            {/* <label>Claim:</label> */}
            <TextArea
              name="claim"
              ref={this.claimRef}
              placeholder="Claim"
              style={{ minHeight: 300 }}
            />
          </Form.Field>

          <Button type="submit" className="ui blue button">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default InputForm;
