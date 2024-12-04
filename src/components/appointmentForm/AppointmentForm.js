import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  aptName,
  setAptName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleAptNameOnChange = (e) => {
    setAptName(e.target.value)
  }

  const handleDateOnChange = (e) => {
    setDate(e.target.value)
  }

  const handleTimeOnChange = (e) => {
    setTime(e.target.value)
  }

  const handleContactOnChange = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{maxWidth: "300px", marginTop: "20px"}}>
        <input onChange={handleAptNameOnChange} type="text" name="title" id="title" value={aptName} placeholder="Title" />
        <input onChange={handleDateOnChange} type="date" name="date" id="date" value={date} placeholder="Date" min={getTodayString()} />
        <input onChange={handleTimeOnChange} type="time" name="time" id="time" value={time} placeholder="Time" />
        <ContactPicker contacts={contacts} setContact={setContact}/>
        <input type="submit" name="submit" value="Submit" />
      </form>
    </>
  );
};
