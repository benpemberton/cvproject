import React from "react";

class Personal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="personal-form">
          <label htmlFor="first">First name:</label>
          <input
            type="text"
            name="first"
            value={this.props.first}
            onChange={(e) => this.props.handler(e, this.props.sectionType)}
          />
          <label htmlFor="last">Last name:</label>
          <input
            type="text"
            name="last"
            value={this.props.last}
            onChange={(e) => this.props.handler(e, this.props.sectionType)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={this.props.email}
            onChange={(e) => this.props.handler(e, this.props.sectionType)}
          />
          <label htmlFor="mobile">Mobile no.:</label>
          <input
            type="tel"
            name="mobile"
            value={this.props.mobile}
            onChange={(e) => this.props.handler(e, this.props.sectionType)}
          />
        </form>
      </div>
    );
  }
}

export default Personal;
