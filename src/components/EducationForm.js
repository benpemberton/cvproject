import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <form className="edu-form" id={this.props.section.id}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          value={this.props.section.subject}
          onChange={(e) => this.props.handler(e, this.props.sectionType)}
        />
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          name="institution"
          value={this.props.section.institution}
          onChange={(e) => this.props.handler(e, this.props.sectionType)}
        />
        <label htmlFor="start">Start:</label>
        <input
          type="month"
          name="start"
          value={this.props.section.start}
          onChange={(e) => this.props.handler(e, this.props.sectionType)}
        />
        <label htmlFor="end">End:</label>
        <input
          type="month"
          name="end"
          value={this.props.section.end}
          onChange={(e) => this.props.handler(e, this.props.sectionType)}
        />
        <button onClick={this.props.remove}>-</button>
      </form>
    );
  }
}

export default EducationForm;
