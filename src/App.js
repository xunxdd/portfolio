import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  getInTouch,
  career,
  onlineWritings,
  portfolio,
  education,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Career from "./components/home/Career";
import Education from "./components/home/Education";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Portfolio from "./components/home/Portfolio";
import Publication from './components/home/Publication';

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          messages={about.messages}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {career.show && (
        <Career
          heading={career.heading}
          careerList={career.lists}
        />
      )}
 
      {education.show && (
        <Education
          heading={education.heading}
          educations={education.lists}
        />
      )}
      {portfolio.show && (
        <Portfolio
          quote ={portfolio.quote}
          heading={portfolio.heading}
          list={portfolio.list}
        />
      )}
      {onlineWritings.show && (
        <Publication
          quote ={onlineWritings.quote}
          heading={onlineWritings.heading}
          list={onlineWritings.list}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
