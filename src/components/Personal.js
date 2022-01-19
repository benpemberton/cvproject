import React from "react";

class Personal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="first-name">First name:</label>
          <input type="text" id="first-name" />
          <label htmlFor="last-name">Last name:</label>
          <input type="text" id="last-name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="mobile">Mobile no.:</label>
          <input type="tel" id="mobile" />
        </form>
      </div>
    );
  }
}

export default Personal;
