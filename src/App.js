import React from "react";
import Personal from "./components/Personal";
import Education from "./components/Education";
import Work from "./components/Work";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="personal-box">
          <Personal />
        </div>
        <div className="edu-box">
          <Education />
        </div>
        <div className="work-box">
          <Work />
        </div>
      </div>
    );
  }
}

export default App;
