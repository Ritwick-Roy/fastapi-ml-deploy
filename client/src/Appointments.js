import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Appointments = () => {
  const [appts, setAppts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/appt").then((res) => {
      setAppts(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
      {appts.map((appt) => (
        <div className="card" key={appt.patient}>
          <Link to={`/appointments/${appt.patient}`}>
          <h2>Patient: {appt.patient}</h2>
          <p>Doctor: {appt.doctor}</p>
          <p>Date: {appt.date}</p>
          <p>Address: {appt.address}</p>
          </Link>
        </div>
      ))}
      <Link to="/create">Book Appointment</Link>
    </div>
  );
};

export default Appointments;
