import React from "react";

class WorkForm extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <form className="work-form" id={this.props.section.id}>
        <label htmlFor="title">Job title:</label>
        <input
          type="text"
          name="title"
          value={this.props.section.title}
          onChange={this.props.handler}
        />
        <label htmlFor="employer">Employer:</label>
        <input
          type="text"
          name="employer"
          value={this.props.section.employer}
          onChange={this.props.handler}
        />
        <label htmlFor="duties">Duties:</label>
        <input
          type="text"
          name="duties"
          value={this.props.section.duties}
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

export default WorkForm;
