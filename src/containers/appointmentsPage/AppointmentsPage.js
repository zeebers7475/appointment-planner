import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const appointments = props.appointments;
  const addAppointment = props.addAppointment;
  const removeAppointment = props.removeAppointment;
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <button onClick={() => {setShowForm(!showForm)}}>Add Appointment</button>
        {showForm ? <AppointmentForm /> : <></>}
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};