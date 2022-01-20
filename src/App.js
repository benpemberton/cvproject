import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";
import Section from "./components/Section";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import uniqid from "uniqid";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="personal-box">
          <Personal />
        </div>
        <div className="edu-box">
          <Section sectionType="education" form={EducationForm} />
        </div>
        <div className="work-box">
          <Section sectionType="work" form={WorkForm} />
        </div>
      </div>
    );
  }
}

export default App;
