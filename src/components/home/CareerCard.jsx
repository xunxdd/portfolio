import React from "react";
import Col from "react-bootstrap/Col";

const CareerCard = ({ value }) => {
  const {
    CompanyName,
    Address,
    Title,
    Time,
    Descriptions,
    TechStack,
  } = value;
  return (
      <Col md="12">
      < div className="p-3 mb-2">
          <h5>{CompanyName} - <span className="text-muted text-secondary">{Address}</span>  </h5>

          <div className="card-text">
              <div>{Title} - <span className="text-secondary">{Time}</span></div>          
              <div className="my-2"> {
                Descriptions.map((description, index) => (
                    <p className="lead"
                    key={`career-description-${index}`}
                    >{description}</p>
                )) 
              }</div>
              {TechStack.length? (
                    <div className="lead text-muted"  >
                        TechStack: {
                        TechStack.map((tech, index) => (
                            <span className="lead text-muted mr-2"
                            key={`career-tech-${index}`}
                            >{tech}</span>
                        )) 
                    } 
                    </div>):<div/>
            }
         </div>
         <hr />
       </div>
      </Col>
  );
};


export default CareerCard;
