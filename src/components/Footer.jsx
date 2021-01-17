import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
       Built with <i className="fas fa-smile" style={{color: "orange"}}/>  using <i className="fab fa-react" style={{color: "blue"}}/>. <br />
       Original Code <i className="fas fa-code" />  by{" "}
        <a
          className="badge"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          Hashir Shoaib. 
        </a>{" "} Thanks
       
      </Container>
    </footer>
  );
};

export default Footer;
