import React from "react";

export const ContactPicker = (props) => {
  return (
    <>
      <select name="contact" id="contact" onChange={props.setContact} >
        {props.contacts.map((contact) => {
          return (
            <option value={contact.name}>{contact.name}</option>)
          })
        }
      </select>
    </>
  );
};
