import asyncHandler from "express-async-handler";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = () => {
  const [prediction, setPrediction] = useState(null);
  const [dis1, setDis1] = useState("no");
  const [dis2, setDis2] = useState("no");
  const [dis3, setDis3] = useState("no");
  const [dis4, setDis4] = useState("no");
  const [dis5, setDis5] = useState("no");
  const [dis6, setDis6] = useState("no");
  const [dis7, setDis7] = useState("no");
  const [dis8, setDis8] = useState("no");
  const [dis9, setDis9] = useState("no");
  const [dis10, setDis10] = useState("no");
  const [dis11, setDis11] = useState("no");
  const [dis12, setDis12] = useState("no");
  const [dis13, setDis13] = useState("no");
  const [dis14, setDis14] = useState("no");
  const [dis15, setDis15] = useState("no");
  const [dis16, setDis16] = useState("no");
  const [dis17, setDis17] = useState("no");
  const [dis18, setDis18] = useState("no");
  const [dis19, setDis19] = useState("no");
  const [dis20, setDis20] = useState("no");
  const [dis21, setDis21] = useState("no");
  const [dis22, setDis22] = useState("no");
  const [dis23, setDis23] = useState("no");
  const [dis24, setDis24] = useState("no");
  const [dis25, setDis25] = useState("no");
  const [dis26, setDis26] = useState("no");
  const [dis27, setDis27] = useState("no");
  const [dis28, setDis28] = useState("no");
  const [dis29, setDis29] = useState("no");
  const [dis30, setDis30] = useState("no");
  const [dis31, setDis31] = useState("no");
  const [dis32, setDis32] = useState("no");
  const [dis33, setDis33] = useState("no");
  const [dis34, setDis34] = useState("no");
  const [dis35, setDis35] = useState("no");
  const [dis36, setDis36] = useState("no");
  const symptoms = [
    "muscle_weakness",
    "coma",
    "red_spots_over_body",
    "high_fever",
    "pain_behind_the_eyes",
    "receiving_blood_transfusion",
    "blood_in_sputum",
    "throat_irritation",
    "rusty_sputum",
    "slurred_speech",
    "increased_appetite",
    "enlarged_thyroid",
    "irritability",
    "nodal_skin_eruptions",
    "spotting_urination",
    "shivering",
    "malaise",
    "sunken_eyes",
    "pus_filled_pimples",
    "weakness_in_limbs",
    "lack_of_concentration",
    "visual_disturbances",
    "altered_sensorium",
    "unsteadiness",
    "bladder_discomfort",
    "passage_of_gases",
    "patches_in_throat",
    "belly_pain",
    "mucoid_sputum",
    "ulcers_on_tongue",
    "cramps",
    "swelling_of_stomach",
    "pain_during_bowel_movements",
    "hip_joint_pain",
    "red_sore_around_nose",
    "movement_stiffness",
  ];
  const handleSubmit = asyncHandler(async (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/predict",
        {
          muscle_weakness: dis1 === "yes",
          coma: dis2 === "yes",
          red_spots_over_body: dis3 === "yes",
          high_fever: dis4 === "yes",
          pain_behind_the_eyes: dis5 === "yes",
          receiving_blood_transfusion: dis6 === "yes",
          blood_in_sputum: dis7 === "yes",
          throat_irritation: dis8 === "yes",
          rusty_sputum: dis9 === "yes",
          slurred_speech: dis10 === "yes",
          increased_appetite: dis11 === "yes",
          enlarged_thyroid: dis12 === "yes",
          irritability: dis13 === "yes",
          nodal_skin_eruptions: dis14 === "yes",
          spotting_urination: dis15 === "yes",
          shivering: dis16 === "yes",
          malaise: dis17 === "yes",
          sunken_eyes: dis18 === "yes",
          pus_filled_pimples: dis19 === "yes",
          weakness_in_limbs: dis20 === "yes",
          lack_of_concentration: dis21 === "yes",
          visual_disturbances: dis22 === "yes",
          altered_sensorium: dis23 === "yes",
          unsteadiness: dis24 === "yes",
          bladder_discomfort: dis25 === "yes",
          passage_of_gases: dis26 === "yes",
          patches_in_throat: dis27 === "yes",
          belly_pain: dis28 === "yes",
          mucoid_sputum: dis29 === "yes",
          ulcers_on_tongue: dis30 === "yes",
          cramps: dis31 === "yes",
          swelling_of_stomach: dis32 === "yes",
          pain_during_bowel_movements: dis33 === "yes",
          hip_joint_pain: dis34 === "yes",
          red_sore_around_nose: dis35 === "yes",
          movement_stiffness: dis36 === "yes",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data.pred);
        setPrediction(res.data.pred);
      });
  });
  return (
    <div>
      <h2>Check Disease</h2>
      <h3>
        Welcome to out symptoms checker page, the model is still in beta but you
        can still check it out as we can ensure a 80% plus accuracy.
      </h3>
      { !prediction && (<div>
      <p>
        Just select the symptoms that the patient is exhibiting or suspecting to
        have.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="dis1">
          {symptoms[0]}
          <input
            type="radio"
            value="yes"
            checked={dis1 === "yes"}
            onChange={(event) => setDis1(event.target.value)}
            name="dis1"
          />
          Yes
          <input
            type="radio"
            value="no"
            checked={dis1 === "no"}
            onChange={(event) => setDis1(event.target.value)}
            name="dis1"
          />
          No
          <br />
          {symptoms[1]}
          <input
            type="radio"
            value="yes"
            checked={dis2 === "yes"}
            onChange={(event) => setDis2(event.target.value)}
            name="dis2"
          />
          Yes
          <input
            type="radio"
            value="no"
            checked={dis2 === "no"}
            onChange={(event) => setDis2(event.target.value)}
            name="dis2"
          />
          No
          <br />
          {symptoms[2]}
          <input
            type="radio"
            value="yes"
            checked={dis3 === "yes"}
            onChange={(event) => setDis3(event.target.value)}
            name="dis3"
          />
          Yes
          <input
            type="radio"
            value="no"
            checked={dis3 === "no"}
            onChange={(event) => setDis3(event.target.value)}
            name="dis3"
          />
          No
          <br />
          {symptoms[3]}
          <input
            type="radio"
            value="yes"
            checked={dis4 === "yes"}
            onChange={(event) => setDis4(event.target.value)}
            name="dis4"
          />
          Yes
          <input
            type="radio"
            value="no"
            checked={dis4 === "no"}
            onChange={(event) => setDis4(event.target.value)}
            name="dis4"
          />
          No
          <br />
          {symptoms[4]}
          <input
            type="radio"
            value="yes"
            checked={dis5 === "yes"}
            onChange={(event) => setDis5(event.target.value)}
            name="dis5"
          />
          Yes
          <input
            type="radio"
            value="no"
            checked={dis5 === "no"}
            onChange={(event) => setDis5(event.target.value)}
            name="dis5"
          />
          No
          <br />
          {symptoms[5]}
          <input
            type="radio"
            value="yes"
            checked={dis6 === "yes"}
            onChange={(event) => setDis6(event.target.value)}
            name="dis6"
          />
          Yes
          <input
            type="radio"
            value="no"
            checked={dis6 === "no"}
            onChange={(event) => setDis6(event.target.value)}
            name="dis6"
          />
          No
          <br />
          {symptoms[6]}
          <input
            type="radio"
            value="yes"
            checked={dis7 === "yes"}
            onChange={(event) => setDis7(event.target.value)}
            name="dis7"
          />
          Yes
          <input
            type="radio"
            value="no"
            checked={dis7 === "no"}
            onChange={(event) => setDis7(event.target.value)}
            name="dis7"
          />
          No
          <br />
          {symptoms[7]}
          <input
            type="radio"
            value="yes"
            checked={dis8 === "yes"}
            onChange={(event) => setDis8(event.target.value)}
            name="dis8"
          />
          Yes
          <input
            type="radio"
            value="no"
            checked={dis8 === "no"}
            onChange={(event) => setDis8(event.target.value)}
            name="dis8"
          />
          No
          <br />
        </div>
        {symptoms[8]}
        <input
          type="radio"
          value="yes"
          checked={dis9 === "yes"}
          onChange={(event) => setDis9(event.target.value)}
          name="dis9"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis9 === "no"}
          onChange={(event) => setDis9(event.target.value)}
          name="dis9"
        />
        No
        <br />
        {symptoms[9]}
        <input
          type="radio"
          value="yes"
          checked={dis10 === "yes"}
          onChange={(event) => setDis10(event.target.value)}
          name="dis10"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis10 === "no"}
          onChange={(event) => setDis10(event.target.value)}
          name="dis10"
        />
        No
        <br />
        {symptoms[10]}
        <input
          type="radio"
          value="yes"
          checked={dis11 === "yes"}
          onChange={(event) => setDis11(event.target.value)}
          name="dis11"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis11 === "no"}
          onChange={(event) => setDis11(event.target.value)}
          name="dis11"
        />
        No
        <br />
        {symptoms[11]}
        <input
          type="radio"
          value="yes"
          checked={dis12 === "yes"}
          onChange={(event) => setDis12(event.target.value)}
          name="dis12"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis12 === "no"}
          onChange={(event) => setDis12(event.target.value)}
          name="dis12"
        />
        No
        <br />
        {symptoms[12]}
        <input
          type="radio"
          value="yes"
          checked={dis13 === "yes"}
          onChange={(event) => setDis13(event.target.value)}
          name="dis13"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis13 === "no"}
          onChange={(event) => setDis13(event.target.value)}
          name="dis13"
        />
        No
        <br />
        {symptoms[13]}
        <input
          type="radio"
          value="yes"
          checked={dis14 === "yes"}
          onChange={(event) => setDis14(event.target.value)}
          name="dis14"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis14 === "no"}
          onChange={(event) => setDis14(event.target.value)}
          name="dis14"
        />
        No
        <br />
        {symptoms[14]}
        <input
          type="radio"
          value="yes"
          checked={dis15 === "yes"}
          onChange={(event) => setDis15(event.target.value)}
          name="dis15"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis15 === "no"}
          onChange={(event) => setDis15(event.target.value)}
          name="dis15"
        />
        No
        <br />
        {symptoms[15]}
        <input
          type="radio"
          value="yes"
          checked={dis16 === "yes"}
          onChange={(event) => setDis16(event.target.value)}
          name="dis16"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis16 === "no"}
          onChange={(event) => setDis16(event.target.value)}
          name="dis16"
        />
        No
        <br />
        {symptoms[16]}
        <input
          type="radio"
          value="yes"
          checked={dis17 === "yes"}
          onChange={(event) => setDis17(event.target.value)}
          name="dis17"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis17 === "no"}
          onChange={(event) => setDis17(event.target.value)}
          name="dis17"
        />
        No
        <br />
        {symptoms[17]}
        <input
          type="radio"
          value="yes"
          checked={dis18 === "yes"}
          onChange={(event) => setDis18(event.target.value)}
          name="dis18"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis18 === "no"}
          onChange={(event) => setDis18(event.target.value)}
          name="dis18"
        />
        No
        <br />
        {symptoms[18]}
        <input
          type="radio"
          value="yes"
          checked={dis19 === "yes"}
          onChange={(event) => setDis19(event.target.value)}
          name="dis19"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis19 === "no"}
          onChange={(event) => setDis19(event.target.value)}
          name="dis19"
        />
        No
        <br />
        {symptoms[19]}
        <input
          type="radio"
          value="yes"
          checked={dis20 === "yes"}
          onChange={(event) => setDis20(event.target.value)}
          name="dis20"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis20 === "no"}
          onChange={(event) => setDis20(event.target.value)}
          name="dis20"
        />
        No
        <br />
        {symptoms[20]}
        <input
          type="radio"
          value="yes"
          checked={dis21 === "yes"}
          onChange={(event) => setDis21(event.target.value)}
          name="dis21"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis21 === "no"}
          onChange={(event) => setDis21(event.target.value)}
          name="dis21"
        />
        No
        <br />
        {symptoms[21]}
        <input
          type="radio"
          value="yes"
          checked={dis22 === "yes"}
          onChange={(event) => setDis22(event.target.value)}
          name="dis22"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis22 === "no"}
          onChange={(event) => setDis22(event.target.value)}
          name="dis22"
        />
        No
        <br />
        {symptoms[22]}
        <input
          type="radio"
          value="yes"
          checked={dis23 === "yes"}
          onChange={(event) => setDis23(event.target.value)}
          name="dis23"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis23 === "no"}
          onChange={(event) => setDis23(event.target.value)}
          name="dis23"
        />
        No
        <br />
        {symptoms[23]}
        <input
          type="radio"
          value="yes"
          checked={dis24 === "yes"}
          onChange={(event) => setDis24(event.target.value)}
          name="dis24"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis24 === "no"}
          onChange={(event) => setDis24(event.target.value)}
          name="dis24"
        />
        No
        <br />
        {symptoms[24]}
        <input
          type="radio"
          value="yes"
          checked={dis25 === "yes"}
          onChange={(event) => setDis25(event.target.value)}
          name="dis25"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis25 === "no"}
          onChange={(event) => setDis25(event.target.value)}
          name="dis25"
        />
        No
        <br />
        {symptoms[25]}
        <input
          type="radio"
          value="yes"
          checked={dis26 === "yes"}
          onChange={(event) => setDis26(event.target.value)}
          name="dis26"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis26 === "no"}
          onChange={(event) => setDis26(event.target.value)}
          name="dis26"
        />
        No
        <br />
        {symptoms[26]}
        <input
          type="radio"
          value="yes"
          checked={dis27 === "yes"}
          onChange={(event) => setDis27(event.target.value)}
          name="dis27"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis27 === "no"}
          onChange={(event) => setDis27(event.target.value)}
          name="dis27"
        />
        No
        <br />
        {symptoms[27]}
        <input
          type="radio"
          value="yes"
          checked={dis28 === "yes"}
          onChange={(event) => setDis28(event.target.value)}
          name="dis28"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis28 === "no"}
          onChange={(event) => setDis28(event.target.value)}
          name="dis28"
        />
        No
        <br />
        {symptoms[28]}
        <input
          type="radio"
          value="yes"
          checked={dis29 === "yes"}
          onChange={(event) => setDis29(event.target.value)}
          name="dis29"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis29 === "no"}
          onChange={(event) => setDis29(event.target.value)}
          name="dis29"
        />
        No
        <br />
        {symptoms[29]}
        <input
          type="radio"
          value="yes"
          checked={dis30 === "yes"}
          onChange={(event) => setDis30(event.target.value)}
          name="dis30"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis30 === "no"}
          onChange={(event) => setDis30(event.target.value)}
          name="dis30"
        />
        No
        <br />
        {symptoms[30]}
        <input
          type="radio"
          value="yes"
          checked={dis31 === "yes"}
          onChange={(event) => setDis31(event.target.value)}
          name="dis31"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis31 === "no"}
          onChange={(event) => setDis31(event.target.value)}
          name="dis31"
        />
        No
        <br />
        {symptoms[31]}
        <input
          type="radio"
          value="yes"
          checked={dis32 === "yes"}
          onChange={(event) => setDis32(event.target.value)}
          name="dis32"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis32 === "no"}
          onChange={(event) => setDis32(event.target.value)}
          name="dis32"
        />
        No
        <br />
        {symptoms[32]}
        <input
          type="radio"
          value="yes"
          checked={dis33 === "yes"}
          onChange={(event) => setDis33(event.target.value)}
          name="dis33"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis33 === "no"}
          onChange={(event) => setDis33(event.target.value)}
          name="dis33"
        />
        No
        <br />
        {symptoms[33]}
        <input
          type="radio"
          value="yes"
          checked={dis34 === "yes"}
          onChange={(event) => setDis34(event.target.value)}
          name="dis34"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis34 === "no"}
          onChange={(event) => setDis34(event.target.value)}
          name="dis34"
        />
        No
        <br />
        {symptoms[34]}
        <input
          type="radio"
          value="yes"
          checked={dis35 === "yes"}
          onChange={(event) => setDis35(event.target.value)}
          name="dis35"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis35 === "no"}
          onChange={(event) => setDis35(event.target.value)}
          name="dis35"
        />
        No
        <br />
        {symptoms[35]}
        <input
          type="radio"
          value="yes"
          checked={dis36 === "yes"}
          onChange={(event) => setDis36(event.target.value)}
          name="dis36"
        />
        Yes
        <input
          type="radio"
          value="no"
          checked={dis36 === "no"}
          onChange={(event) => setDis36(event.target.value)}
          name="dis36"
        />
        No
        <br />
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      </div>)}
      { prediction && (<div>
        <p>Probable diseases patient needs to check for: <h3>{prediction}</h3></p>
      <button onClick={()=>{setPrediction(null)}}>
          Check Again
      </button><hr />
      Do you want to 
      <Link to="/create">Book Appointment</Link> 
       regarding this?
      </div>)}
    </div>
  );
};
export default Form;
