import React from "react";
import uniqid from "uniqid";

class Section extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    if (this.props.sectionType === "education") {
      this.state = {
        sections: [
          {
            subject: "",
            institution: "",
            start: "",
            end: "",
            id: uniqid(),
          },
        ],
      };
    } else {
      this.state = {
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
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.removeSection = this.removeSection.bind(this);
  }

  handleChange(e, sectionType) {
    console.log(e + "" + sectionType);

    const index = this.state.sections.findIndex(
      (section) => section.id === e.target.parentNode.id
    );

    this.setState(() => {
      return (this.state.sections[index][e.target.name] = e.target.value);
    });
  }

  addSection() {
    if (this.props.sectionType === "education") {
      this.setState({
        sections: [
          ...this.state.sections,
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
        sections: [
          ...this.state.sections,
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

  removeSection(e) {
    e.preventDefault();
    this.setState({
      sections: this.state.sections.filter(
        (section) => section.id !== e.target.parentNode.id
      ),
    });
  }

  //   componentDidUpdate() {
  //     console.log(...this.state.sections);
  //   }

  render() {
    return (
      <div>
        {this.props.sections.map((section) => (
          <this.props.form
            key={section.id}
            section={section}
            sectionType={this.props.sectionType}
            handler={(e, type) => this.props.handler(e, type)}
            remove={this.removeSection}
          />
        ))}
        <button onClick={() => this.addSection()}>+</button>
      </div>
    );
  }
}

export default Section;
