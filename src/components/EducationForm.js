import React from "react";

class EducationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.editing) {
      return (
        <div className="form-wrap">
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
            <button
              className="remove"
              onClick={(e) => this.props.remove(e, this.props.sectionType)}
            >
              &#8211;
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="form-wrap">
          <form className="edu-form saved" id={this.props.section.id}>
            <label htmlFor="subject">Subject:</label>
            <p>{this.props.section.subject}</p>
            <label htmlFor="institution">Institution:</label>
            <p>{this.props.section.institution}</p>
            <label htmlFor="start">Start:</label>
            <p>{this.props.section.start}</p>
            <label htmlFor="end">End:</label>
            <p>{this.props.section.end}</p>
          </form>
        </div>
      );
    }
  }
}

export default EducationForm;
