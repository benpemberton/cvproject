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

  function convertDate(date) {
    if (!date) return;

    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const parts = date.split("-");

    const index = Number(parts[1]);

    return month[index - 1] + " " + parts[0];
  }

  if (editing) {
    return (
      <>
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
      </>
    );
  } else {
    return (
      <>
        {entries.map((entry) => (
          <Form
            key={entry.id}
            entry={entry}
            sectionType={sectionType}
            convert={(date) => convertDate(date)}
          />
        ))}
      </>
    );
  }
}

export default Section;
