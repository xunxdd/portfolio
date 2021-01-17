import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import CareerCard from "./CareerCard";

const Career = ({ heading, careerList }) => {
  
  return (
    <Jumbotron fluid id="career" className="bg-light m-0 target-section">
      <Container className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {
          careerList.map((career, index) => (
                <CareerCard
                  key={`career-card-${index}`}
                  id={`career-card-${index}`}
                  value={career}
                />
              )) 
          }
        </Row>
      </Container>
    </Jumbotron>

  );
};

export default Career;
