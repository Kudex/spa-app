import React from "react";
import "./style/Contact.css";


const getGender = (gender) => {
  if (gender === "male") {
    return "person_man";
  } else if (gender === "female") {
    return "person_women";
  }
  return "";
};
const Contact = ({ firstName, lastName, phone, gender = "" }) => {
  return (
    <li className="list">
      <div className="name">
        name:<span>{`${lastName} ${firstName}`}</span>{" "}
      </div>
      <div className="phone">
        phone:<span>{`${phone}`}</span>
      </div>
      <div className={`gender ${getGender(gender)}`}>{`gender: ${gender}`}</div>
    </li>
  );
};

export default Contact;
