import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Quote from "./Quote";

const Publication = ({ heading, list, quote }) => {
    return (
        <Jumbotron fluid id="publication" className="bg-light m-0 target-section">
          <Container className="shadow-lg p-3 mb-5 bg-white rounded">
          
            <h2 className="display-4 pb-5 text-center">{heading}</h2>
            <div className="px-3 mb-1" >
                <Quote quote={quote} />
             {
                 list.map((pub, index) => (
                    <p>
                        <a target=" _blank"  
                            href={pub.url}  
                            key={`publication-${index}`}>
                            {pub.title}
                        </a>
                        <div className="px-2 py-2 text-muted">
                            {pub.description}
                        </div>
                    </p>       
                 ))
             }
             </div>
        </Container>
        </Jumbotron>);
};
  
export default Publication;