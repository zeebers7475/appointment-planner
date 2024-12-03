import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {

  const currentContacts = props.contacts;
  const addContact = props.addContact;
  const removeContact = props.removeContact;
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const toggleShowForm = () => {
    console.log(showForm)
    setShowForm(!showForm);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactName = e.target[0].value;
    const contactPhone = e.target[1].value;
    const contactEmail = e.target[2].value;

    if(contactName && contactPhone) {
      addContact(contactName, contactPhone, contactEmail)
    } else {
      
    }
    
    console.log(currentContacts)
    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <button onClick={toggleShowForm}><h2>Add Contact</h2></button>
        {showForm ? <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} /> : <></>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
