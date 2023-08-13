import React, { Component } from 'react';

class ContactDelete extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.onDelete}>
        Delete
      </button>
    );
  }
}

export default ContactDelete;
