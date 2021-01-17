import React from "react";
import Col from "react-bootstrap/Col";

const EducationCard = ({ value }) => {
  const {
    degree,
    university,
    time
  } = value;
  return (
      <Col md="12">
      < div className="p-2">
          <h5>{university} </h5>
          <div className="primary-text">{degree} - <span className="secondary-text">{time}</span></div>
         <hr />
       </div>
      </Col>
  );
};


export default EducationCard;
