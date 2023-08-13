import React, { Component } from 'react';
import ContactItem from './ContactItem ';

class ContactList extends Component {
  render() {
    const { contacts, onEdit, onDelete } = this.props;

    return (
      <div>
        <h2>Contact List</h2>
        <ul>
          {contacts.map((contact, index) => (
            <ContactItem
              key={index}
              contact={contact}
              onEdit={() => onEdit(index)}
              onDelete={() => onDelete(index)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ContactList;
