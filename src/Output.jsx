import React from "react";
import { Container, List } from "semantic-ui-react";

class Output extends React.Component {
  render() {
    const res = this.props.claim ? this.props.claim.result : "";
    const acceptance = this.props.claim ? this.props.claim.acceptance : "";
    const rejection = this.props.claim ? this.props.claim.rejection : "";
    return (
      <div className="OutputForm">
        <div className="result">
          <div>
            <h1>RESULTS:</h1>
          </div>
          <h2>Probability of Acceptance: {acceptance}</h2>
          <h2>Probability of Rejection: {rejection}</h2>
        </div>
        <div className="recommendations">
          <div className="noun-box">
            <label className="label-noun">Recommended Nouns:</label>
            <List>
              <List.Item>comprising</List.Item>
              <List.Item>end</List.Item>
              <List.Item>nozzle</List.Item>
              <List.Item>system</List.Item>
              <List.Item>portion</List.Item>
              <List.Item>outlet</List.Item>
              <List.Item>surface</List.Item>
              <List.Item>plurality</List.Item>
              <List.Item>axis</List.Item>
              <List.Item>device</List.Item>
            </List>
          </div>
          <div className="adj-box">
            <label className="label-noun">Recommended Adjectives:</label>
            <List>
              <List.Item>fluid</List.Item>
              <List.Item>second</List.Item>
              <List.Item>first</List.Item>
              <List.Item>least</List.Item>
              <List.Item>liquid</List.Item>
              <List.Item>inner</List.Item>
              <List.Item>outer</List.Item>
              <List.Item>relative</List.Item>
              <List.Item>adjacent</List.Item>
              <List.Item>open</List.Item>
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default Output;
