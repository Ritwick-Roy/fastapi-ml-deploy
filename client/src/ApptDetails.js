import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const ApptDetails = () => {
  const [appt, setAppt] = useState([]);
  const { patient } = useParams();
  const navigate=useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/appt/" + patient).then((res) => {
      setAppt(res.data);
    });
  }, [patient]);

  const clickHandler = async () => {
    await axios.delete("http://localhost:8000/api/appt/" + patient);
    navigate('/appointments');    
  };

  return (
    <div>
      <h1>Appt details of - {patient} </h1>
      <div className="card" key={appt.patient}>
        <h2>Patient: {appt.patient}</h2>
        <p>Doctor: {appt.doctor}</p>
        <p>Date: {appt.date}</p>
        <p>Address: {appt.address}</p>
        <button onClick={clickHandler}>Delete</button>
      </div>
    </div>
  );
};

export default ApptDetails;
