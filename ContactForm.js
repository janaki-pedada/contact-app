import React, { useState } from 'react';
import ContactList from './ContactList';

const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && phoneNumber && email) {
      if (editingIndex === -1) {
        const newContact = {
          firstName,
          lastName,
          phoneNumber,
          email,
        };
        setContacts([...contacts, newContact]);
      } else {
        const updatedContacts = [...contacts];
        updatedContacts[editingIndex] = {
          firstName,
          lastName,
          phoneNumber,
          email,
        };
        setContacts(updatedContacts);
        setEditingIndex(-1);
      }
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setEmail('');
    }
  };

  const handleEdit = (index) => {
    const contactToEdit = contacts[index];
    setFirstName(contactToEdit.firstName);
    setLastName(contactToEdit.lastName);
    setPhoneNumber(contactToEdit.phoneNumber);
    setEmail(contactToEdit.email);
    setEditingIndex(index);
  };

  const handleCancelEdit = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setEditingIndex(-1);
  };

  const handleDelete = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h2>Create Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <br/>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br/>
        <button type="submit">
          {editingIndex === -1 ? 'Create' : 'Save'}
        </button>
        <br/>
        {editingIndex !== -1 && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel Edit
          </button>
        )}
      </form>

      <ContactList contacts={contacts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default ContactForm;
