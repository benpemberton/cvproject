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
      work: [
        {
          title: "",
          employer: "",
          duties: "",
          start: "",
          end: "",
          id: uniqid(),
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addSection = this.addSection.bind(this);
    this.removeSection = this.removeSection.bind(this);
  }

  handleChange(e, type) {
    if (type === "personal") {
      const prevState = { ...this.state.personal };

      prevState[e.target.name] = e.target.value;

      this.setState({ personal: prevState });
    } else {
      const index = this.state[type].findIndex(
        (section) => section.id === e.target.parentNode.id
      );

      const prevState = [...this.state[type]];

      const obj = { ...prevState[index] };

      obj[e.target.name] = e.target.value;

      prevState[index] = obj;

      this.setState({ [type]: [...prevState] });
    }
  }

  addSection(type) {
    if (type === "education") {
      this.setState({
        [type]: [
          ...this.state[type],
          {
            subject: "",
            institution: "",
            start: "",
            end: "",
            id: uniqid(),
          },
        ],
      });
    } else {
      this.setState({
        [type]: [
          ...this.state[type],
          {
            title: "",
            employer: "",
            duties: "",
            start: "",
            end: "",
            id: uniqid(),
          },
        ],
      });
    }
  }

  removeSection(e, type) {
    e.preventDefault();
    this.setState({
      [type]: this.state[type].filter(
        (section) => section.id !== e.target.parentNode.id
      ),
    });
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div className="personal-box">
          <Personal
            sectionType="personal"
            handler={this.handleChange}
            {...this.state.personal}
          />
        </div>
        <div className="edu-box">
          <Section
            sections={this.state.education}
            sectionType="education"
            handler={this.handleChange}
            add={this.addSection}
            remove={this.removeSection}
            form={EducationForm}
          />
        </div>
        <div className="work-box">
          <Section
            sections={this.state.work}
            sectionType="work"
            handler={this.handleChange}
            add={this.addSection}
            remove={this.removeSection}
            form={WorkForm}
          />
        </div>
      </div>
    );
  }
}

export default App;
