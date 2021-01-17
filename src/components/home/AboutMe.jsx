import React from "react";

const AboutMe = ({ heading, messages, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic] = React.useState(Boolean(link));
  const items = messages.map((message,index) =><p className="lead" key={index}>{message}</p>);
  React.useEffect(() => {
      setProfilePicUrl(link);
  }, [link]);

  return (
    <div id="aboutme" className="target-section jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-4 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "8" : "12"}`}>
            <h2 className="display-4 mb-5">{heading}</h2>
            {items}
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
