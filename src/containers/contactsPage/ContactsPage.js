import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { Tile } from "../../components/tile/Tile"

export const ContactsPage = (props) => {

  const currentContacts = props.contacts;
  const addContact = props.addContact;
  const removeContact = props.removeContact;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [dupeNameWarning, setDupeNameWarning] = useState(false);
  const [dupePhoneWarning, setDupePhoneWarning] = useState(false);
  const [dupeEmailWarning, setDupeEmailWarning] = useState(false);
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
      setName('')
      setPhone('')
      setEmail('')
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

  useEffect(() => {
    const nameDuplicate = currentContacts.find((contact) => contact.name === name)
    const phoneDuplicate = currentContacts.find((contact) => contact.phone === phone)
    const emailDuplicate = currentContacts.find((contact) => contact.email === email)
    if(nameDuplicate) {
      setDisableButton(true)
      setDupeNameWarning(true)
    } else if(phoneDuplicate) {
      setDisableButton(true)
      setDupePhoneWarning(true)
    } else if(emailDuplicate) {
      setDisableButton(true)
      setDupeEmailWarning(true)
    } else {
      setDisableButton(false)
      setDupeNameWarning(false)
      setDupePhoneWarning(false)
      setDupeEmailWarning(false)
    }
  }, [name, phone, email])

  return (
    <div>
      <section>
        <button onClick={toggleShowForm}>Add Contact</button>
        {showForm ? <ContactForm name={name} setName={setName} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} handleSubmit={handleSubmit} disableButton={disableButton} dupeNameWarning={dupeNameWarning} dupePhoneWarning={dupePhoneWarning} dupeEmailWarning={dupeEmailWarning} /> : <></>}
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <Tile>
          {currentContacts.map((contact, index) => {
            return (
              <TileList key={contact.name + index}>
                <button onClick={() => removeContact(contact.name)}>X</button>
                <h1 className="tile-title">{contact.name}</h1>
                <h2>{contact.phone}</h2>
                <h2>{contact.email}</h2>
              </TileList>
            )
          })}
        </Tile>
      </section>
    </div>
  );
};
