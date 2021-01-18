import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const PortfolioCard = ({ value, imgHeight }) => {
  const {
    title,
    url,
    notes,
    videoUrl,
    thumbnail, 
    repo,
  } = value;

  return (
    <Col md={4}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        <Card.Body>
          <Card.Title as="h5">{title } </Card.Title>
          <img className="card-img-top" height={imgHeight} src={thumbnail} alt={title}></img>
          <hr></hr>
          <Card.Text>{notes}</Card.Text>
          <CardButtons video_url={videoUrl} link={url} repo={repo} />
        </Card.Body>
      </Card>
    </Col>
  );
};

const CardButtons = ({ video_url, link, repo }) => {
  return (
    <>
      {video_url &&
        <a
            href={video_url}
            target=" _blank"
            className="btn btn-outline-secondary mr-3"
        >
            <i className="fab fa-youtube" /> 
          </a>
      }
      {link &&
        <a
            href={link}
            target=" _blank"
            className="btn btn-outline-secondary"
        >
            <i className="fas fa-link " /> 
          </a>
      }
     {repo &&
        <a
            href={repo}
            target=" _blank"
            className="btn btn-outline-secondary"
        >
            <i className="fab fa-github" /> 
          </a>
      }

    </>
  );
};

export default PortfolioCard;
