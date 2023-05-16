import React from "react";

const SchoolCard = ({ school }) => {
  return (
    <div className="school-card">
      <h2>{school.name}</h2>
      <p>Type: {school.type}</p>
      <p>Location: {school.location}</p>
    </div>
  );
};

export default SchoolCard;
