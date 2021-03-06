import React from "react";

export default class ExampleClassComponent extends React.Component {
  state = {
    number: 0,
  };
  render() {
    const { item } = this.props;
    return (
      <div
        onClick={() => {
          this.setState({ number: this.state.number + 1 });
        }}
      >
        Example {this.state.number}
      </div>
    );
  }
}
