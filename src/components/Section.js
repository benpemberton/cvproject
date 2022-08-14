import React from "react";

function Section({
  entries,
  editing,
  sectionType,
  handler,
  add,
  remove,
  Form,
}) {
  function addButton() {
    if (editing) {
      return (
        <button className="add" onClick={() => add(sectionType)}>
          +
        </button>
      );
    } else {
      return;
    }
  }

  if (editing) {
    return (
      <div>
        {entries.map((entry) => (
          <Form
            key={entry.id}
            editing={editing}
            entry={entry}
            sectionType={sectionType}
            handler={(e, type) => handler(e, type)}
            remove={(e, type) => remove(e, type)}
          />
        ))}
        {addButton()}
      </div>
    );
  } else {
    return (
      <div>
        {entries.map((entry) => (
          <Form key={entry.id} entry={entry} sectionType={sectionType} />
        ))}
      </div>
    );
  }
}

export default Section;
