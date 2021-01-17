import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import EducationCard from "./EducationCard";

const Education = ({ heading, educations }) => {
  return (
    <Jumbotron fluid id="education" className="bg-light m-0  target-section">
      <Container className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {
          educations.map((education, index) => (
                <EducationCard
                  key={`career-card-${index}`}
                  id={`career-card-${index}`}
                  value={education}
                />
              )) 
          }
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Education;
