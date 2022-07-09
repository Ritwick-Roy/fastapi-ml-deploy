import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAppts = () => {
  const [patient, setPatient] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/appt", {
      patient,
      doctor,
      date,
      address,
    });
    navigate("/appointments");
  };
  return (
    <div>
      <h1>Create Appointments</h1>
      <form onSubmit={handleSubmit}>
        <label>Patient name:</label>
        <input
          type="text"
          required
          value={patient}
          onChange={(e) => {
            setPatient(e.target.value);
          }}
        />
        <label>Doctor name:</label>
        <input
          type="text"
          required
          value={doctor}
          onChange={(e) => {
            setDoctor(e.target.value);
          }}
        ></input>
        <label>Preferred date:</label>
        <input
          type="text"
          required
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        ></input>
        <label>Address:</label>
        <input
          type="text"
          required
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></input>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAppts;
