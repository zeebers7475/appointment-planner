import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  disableButton,
  dupeNameWarning,
  dupePhoneWarning,
  dupeEmailWarning,
}) => {

  const handleNameChange = (e) => {
    setName(e.target.value)
    console.log(name)
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value)
    console.log(phone)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
    <form onSubmit={handleSubmit} style={{maxWidth: "300px", marginTop: "20px"}}>
      <input onChange={handleNameChange} type="text" name="name" id="name" placeholder="Name*" value={name} /><p>{dupeNameWarning ? `There is a Duplicate Contact` : ``}</p>
      <input onChange={handlePhoneChange} type="tel" name="phone" id="phone" placeholder="Phone*" value={phone} /><p>{dupePhoneWarning ? `There is a Duplicate Contact` : ``}</p>
      <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Email" value={email} /><p>{dupeEmailWarning ? `There is a Duplicate Contact` : ``}</p>
      <input type="submit" name="submit" id="submit" value="Submit" disabled={disableButton} />
    </form>
    </>
  );
};

