import React from "react";
import uniqid from "uniqid";

class Education extends React.Component {
  constructor(props) {
    super(props);

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

    // this.form = this.form.bind(this);
  }

  handleChange(e) {
    const index = this.state.sections.findIndex(
      (section) => section.id === e.target.parentNode.id
    );

    this.setState(() => {
      return (this.state.sections[index][e.target.name] = e.target.value);
    });
  }

  form(sectionID) {
    const index = this.state.sections.findIndex(
      (section) => section.id === sectionID
    );

    return (
      <form className="edu-form" key={sectionID} id={sectionID}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          value={this.state.sections[index].subject}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          name="institution"
          value={this.state.sections[index].institution}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="start">Start:</label>
        <input
          type="month"
          name="start"
          value={this.state.sections[index].start}
          onChange={(e) => this.handleChange(e)}
        />
        <label htmlFor="end">End:</label>
        <input
          type="month"
          name="end"
          value={this.state.sections[index].end}
          onChange={(e) => this.handleChange(e)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            this.removeSection(e);
          }}
        >
          -
        </button>
      </form>
    );
  }

  addSection() {
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
  }

  removeSection(e) {
    this.setState({
      sections: this.state.sections.filter(
        (section) => section.id !== e.target.parentNode.id
      ),
    });
  }

  mapSections() {
    return this.state.sections.map((section) => {
      return this.form(section.id);
    });
  }

  componentDidUpdate() {
    console.log(...this.state.sections);
  }

  render() {
    return (
      <div>
        {this.mapSections()}
        <button onClick={() => this.addSection()}>+</button>;
      </div>
    );
  }
}

export default Education;
