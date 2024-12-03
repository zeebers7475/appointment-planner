import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([{name: "Kris", phone: 9088722745,}]);
  const [appointments, setAppointments] = useState([]);
 
  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phone, email='') => {
    contacts.push({name: name, phone: phone, email: email})
  }

  const removeContact = (name) => {
    if(name) {
      const newContacts = contacts.filter(name !== name)
      setContacts(newContacts)
    }
  }

  const addAppointment = (aptName, contact, date, time) => {
    setAppointments((prev) => [...prev, {aptName: aptName, contact: contact, date: date, time: time}])
  }

  const removeAppointment = (aptName) => {
    const newAppointments = appointments.filter(aptName !== aptName)
    setAppointments(newAppointments)
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addContact} removeContacts={removeContact} /> /* Add props to ContactsPage */ }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} addAppointment={addAppointment} removeAppointment={removeAppointment} /> /* Add props to AppointmentsPage */ }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
