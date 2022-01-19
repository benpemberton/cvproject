import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render(sectionID) {
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
}
