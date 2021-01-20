import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import PortfolioCard from "./PortfolioCard";
import Quote from "./Quote";

const Portfolio = ({ heading, list,note, quote }) => {
    const mobileApps = list.filter((x) => x.category === 'Mobile App')
    const alexaSkills = list.filter(x => x.category === 'Alexa Skills');
    const machineLearning = list.filter(x => x.category === 'Machine Learning');
    return (
        <Jumbotron fluid id="portfolio" className="bg-light m-0  target-section">
          <Container className="">
          
            <h2 className="display-4 pb-5 text-center">{heading}
            <div style={{"font-size": "1rem"}}><span>{note}</span></div>
            </h2>
           
            <div className="px-3 mb-1" >
                <Quote quote={quote} />
             </div>
            <PortfolioCategory products = {mobileApps} title="Mobile Apps" imgHeight="250" />
            <PortfolioCategory products = {alexaSkills} title="Alexa Skills" imgHeight="200" />
            <PortfolioCategory products = {machineLearning} title="Machine Learning Demo Projects" imgHeight="150" />
        </Container>
        </Jumbotron>);
};

const PortfolioCategory = ({ products, title, imgHeight }) => {
    return (
      <Container className="mb-2">
      <h4>{title}</h4>
        <Row>
        {
            products.length &&
            products.map((app, index) =>  (
                <PortfolioCard
                key={`app-${index}`}
                id={`app-${index}`}
                imgHeight={imgHeight}
                value={app}
                />
            ))
        }
        </Row>
      </Container>
    );
  };
  
export default Portfolio;