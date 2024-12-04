import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleTitleOnChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDateOnChange = (e) => {
    setDate(e.target.value)
  }

  const handleTimeOnChange = (e) => {
    setTime(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{maxWidth: "300px", marginTop: "20px"}}>
        <input onChange={handleTitleOnChange} type="text" name="title" id="title" value={title} placeholder="Title" />
        <input onChange={handleTitleOnChange} type="text" name="contact" id="contact" value={contact} placeholder="Contact" />
        <input onChange={handleDateOnChange} type="date" name="date" id="date" value={date} placeholder="Date" />
        <input onChange={handleTimeOnChange} type="time" name="time" id="time" value={time} placeholder="Time" />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </>
  );
};
