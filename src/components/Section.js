import React from "react";
import uniqid from "uniqid";

class Section extends React.Component {
  constructor(props) {
    super(props);
  }

  addButton() {
    if (this.props.editing) {
      return (
        <button
          className="add"
          onClick={() => this.props.add(this.props.sectionType)}
        >
          +
        </button>
      );
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        {this.props.sections.map((section) => (
          <this.props.form
            key={section.id}
            editing={this.props.editing}
            section={section}
            sectionType={this.props.sectionType}
            handler={(e, type) => this.props.handler(e, type)}
            remove={(e, type) => this.props.remove(e, type)}
          />
        ))}
        {this.addButton()}
      </div>
    );
  }
}

export default Section;
