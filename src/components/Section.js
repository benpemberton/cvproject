import React from "react";

function Section(props) {
  function addButton() {
    if (props.editing) {
      return (
        <button className="add" onClick={() => props.add(props.sectionType)}>
          +
        </button>
      );
    } else {
      return;
    }
  }

  return (
    <div>
      {props.sections.map((section) => (
        <props.form
          key={section.id}
          editing={props.editing}
          section={section}
          sectionType={props.sectionType}
          handler={(e, type) => props.handler(e, type)}
          remove={(e, type) => props.remove(e, type)}
        />
      ))}
      {addButton()}
    </div>
  );
}

export default Section;
