import React from "react";

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <form className="job-form">
          <label htmlFor="job-title">Job title:</label>
          <input type="text" id="job-title" />
          <label htmlFor="employer">Employer:</label>
          <input type="text" id="employer" />
          <label htmlFor="responsibilities">Responsibilities:</label>
          <input type="textarea" id="responsibilities" />
          <label htmlFor="start">Start:</label>
          <input type="month" id="start" />
          <label htmlFor="end">End:</label>
          <input type="month" id="end" />
        </form>
      </div>
    );
  }
}

export default Work;
