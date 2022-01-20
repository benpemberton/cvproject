import React from "react";
import uniqid from "uniqid";

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.sections.map((section) => (
          <this.props.form
            key={section.id}
            section={section}
            sectionType={this.props.sectionType}
            handler={(e, type) => this.props.handler(e, type)}
            remove={(e, type) => this.props.remove(e, type)}
          />
        ))}
        <button onClick={() => this.props.add(this.props.sectionType)}>
          +
        </button>
      </div>
    );
  }
}

export default Section;
