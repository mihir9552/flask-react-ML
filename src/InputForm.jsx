import React from "react";
// import "semantic-ui-css/semantic.min.css";
import { Button, Form, TextArea } from "semantic-ui-react";

class InputForm extends React.Component {
  claimRef = React.createRef();
  handleSubmit = event => {
    event.preventDefault();
    const claim = this.claimRef.current.value;

    fetch("/test/", {
      method: "post",
      body: claim
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(response => this.props.addClaim(response));
  };
  render() {
    return (
      <div className="InputForm">
        <Form onSubmit={this.handleSubmit} className="form">
          <Form.Field>
            {/* <label>Claim:</label> */}
            <TextArea
              name="claim"
              ref={this.claimRef}
              placeholder="Claim"
              style={{ minHeight: 100 }}
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
