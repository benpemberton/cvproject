import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <form className="edu-form" id={this.props.id}>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          value={this.props.section.subject}
          onChange={this.props.handler}
        />
        <label htmlFor="institution">Institution:</label>
        <input
          type="text"
          name="institution"
          value={this.props.section.institution}
          onChange={this.props.handler}
        />
        <label htmlFor="start">Start:</label>
        <input
          type="month"
          name="start"
          value={this.props.section.start}
          onChange={this.props.handler}
        />
        <label htmlFor="end">End:</label>
        <input
          type="month"
          name="end"
          value={this.props.section.end}
          onChange={this.props.handler}
        />
        <button onClick={this.props.remove}>-</button>
      </form>
    );
  }
}

export default EducationForm;
