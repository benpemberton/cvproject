import React from "react";

class WorkForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    if (this.props.editing) {
      return (
        <div className="form-wrap">
          <form className="work-form" id={this.props.section.id}>
            <label htmlFor="title">Job title:</label>
            <input
              type="text"
              name="title"
              value={this.props.section.title}
              onChange={(e) => this.props.handler(e, this.props.sectionType)}
            />
            <label htmlFor="employer">Employer:</label>
            <input
              type="text"
              name="employer"
              value={this.props.section.employer}
              onChange={(e) => this.props.handler(e, this.props.sectionType)}
            />
            <label htmlFor="duties">Duties:</label>
            <textarea
              type="text"
              name="duties"
              value={this.props.section.duties}
              onChange={(e) => this.props.handler(e, this.props.sectionType)}
            ></textarea>
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
              -
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="form-wrap">
          <form className="work-form saved" id={this.props.section.id}>
            <label htmlFor="title">Job title:</label>
            <p>{this.props.section.title}</p>
            <label htmlFor="employer">Employer:</label>
            <p>{this.props.section.employer}</p>
            <label htmlFor="duties">Duties:</label>
            <p>{this.props.section.duties}</p>
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

export default WorkForm;
