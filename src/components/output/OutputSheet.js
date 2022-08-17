import React, { Component } from "react";
import PersonalOutput from "./PersonalOutput";
import MappedOutput from "./MappedOutput";
import ExperienceEntry from "./ExperienceEntry";
import EducationEntry from "./EducationEntry";

class OutputSheet extends Component {
  render() {
    const { personal, education, experience } = this.props;

    return (
      <div className="output-sheet">
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
