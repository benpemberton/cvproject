import React, { Component } from "react";
import PersonalOutput from "./PersonalOutput";
import MappedOutput from "./MappedOutput";
import ExperienceEntry from "./ExperienceEntry";
import EducationEntry from "./EducationEntry";

class OutputSheet extends Component {
  render() {
    const { personal, education, experience } = this.props;

    return (
      // added inline style padding because react-to-print ignores sass padding
      <div className="output-sheet" style={{ padding: "1vw" }}>
        <PersonalOutput {...personal} />
        <MappedOutput
          entries={experience}
          Entry={ExperienceEntry}
          sectionType={"experience"}
          heading={"Experience"}
        />
        <MappedOutput
          entries={education}
          Entry={EducationEntry}
          sectionType={"education"}
          heading={"Education"}
        />
      </div>
    );
  }
}

export default OutputSheet;
