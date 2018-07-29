import React, { Component } from 'react';
import { connect } from 'react-redux';

class Input extends Component {
  render() {
    return (
      <div>
        <button />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

Input = connect(mapStateToProps)(Input);

export default Input;
