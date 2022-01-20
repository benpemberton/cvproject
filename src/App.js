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

    this.state = {
      personal: {
        first: "",
        last: "",
        email: "",
        mobile: "",
      },
      education: [
        {
          subject: "",
          institution: "",
          start: "",
          end: "",
          id: uniqid(),
        },
      ],
      work: {
        sections: [
          {
            title: "",
            employer: "",
            duties: "",
            start: "",
            end: "",
            id: uniqid(),
          },
        ],
      },
    };

    this.handleChange = this.handleChange.bind(this);
    // this.removeSection = this.removeSection.bind(this);
  }

  handleChange(e, type) {
    const index = this.state[type].findIndex(
      (section) => section.id === e.target.parentNode.id
    );

    const prevState = [...this.state[type]];

    const obj = { ...prevState[index] };

    obj[e.target.name] = e.target.value;

    prevState[index] = obj;

    if (type === "education") {
      this.setState({ [type]: [...prevState] });
    }

    // this.setState(() => {
    //   return (this.state[type].sections[index][e.target.name] = e.target.value);
    // });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="personal-box">
          <Personal />
        </div>
        <div className="edu-box">
          <Section
            sections={this.state.education}
            sectionType="education"
            handler={this.handleChange}
            form={EducationForm}
          />
        </div>
        <div className="work-box">
          <Section
            {...this.state.work}
            sectionType="work"
            handler={this.handleChange}
            form={WorkForm}
          />
        </div>
      </div>
    );
  }
}

export default App;
