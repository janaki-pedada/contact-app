import React, { Component } from 'react';
import ContactDelete from './ContactDelete';
class ContactItem extends Component {
  handleEditClick = () => {
    this.props.onEdit();
  };
  handleDeleteClick = () => {
    this.props.onDelete();
  };
  render() {
    const { contact } = this.props;
    return (
      <li>
        {contact.firstName} {contact.lastName} - {contact.phoneNumber} - {contact.email}{' '}
        <button type="button" onClick={this.handleEditClick}>
          Edit
        </button>
        <ContactDelete onDelete={this.handleDeleteClick} />
      </li>
    );
  }
}
export default ContactItem;
