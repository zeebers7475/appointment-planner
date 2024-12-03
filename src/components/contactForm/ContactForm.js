import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
    <form onSubmit={handleSubmit} style={{maxWidth: "300px"}}>
      <input onChange={handleNameChange} type="text" name="name" id="name" placeholder="Name*" value={name} />
      <input onChange={handlePhoneChange} type="tel" name="phone" id="phone" placeholder="Phone*" value={phone} />
      <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Email" value={email} />
      <input type="submit" name="submit" id="submit" value="Submit" />
    </form>
    </>
  );
};

