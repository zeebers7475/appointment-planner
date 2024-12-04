import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { Tile } from "../../components/tile/Tile"

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const appointments = props.appointments;
  const addAppointment = props.addAppointment;
  const removeAppointment = props.removeAppointment;
  const contacts = props.contacts;
  const [showForm, setShowForm] = useState(false);
  const [aptName, setAptName] = useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] =useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

    const aptName = e.target[0].value;
    const date = e.target[1].value;
    const time = e.target[2].value;
    const contact = e.target[3].value;

    if(aptName && date && time) {
      addAppointment(aptName, contact, date, time)
      setAptName('')
      setContact('')
      setDate('')
      setTime('')
    } 
    
    console.log(appointments)
   
  };

  return (
    <div>
      <section>
        <button onClick={() => {setShowForm(!showForm)}}>Add Appointment</button>
        {showForm ? <AppointmentForm handleSubmit={handleSubmit} aptName={aptName} setAptName={setAptName} contact={contact} setContact={setContact} date={date} setDate={setDate} time={time} setTime={setTime} contacts={contacts} /> : <></>}
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <Tile>
          {appointments.map((appointment, index) => {
            return (
              <TileList key={appointment.aptName + index}>
                <button onClick={() => removeAppointment(appointment.aptName)}>X</button>
                <h1 className="tile-title">{appointment.aptName}</h1>
                <h2>{appointment.date}</h2>
                <h2>{appointment.time}</h2>
                <h2>{appointment.contact}</h2>
              </TileList>
            )
          })}
        </Tile>
      </section>
    </div>
  );
};