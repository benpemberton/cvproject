import React from "react";
import Button from "../Button";

const MappedSection = ({
  change,
  add,
  remove,
  entries,
  Form,
  sectionType,
  heading,
}) => {
  const mappedEntries = () => {
    return (
      <>
        {entries.map((entry) => (
          <Form
            key={entry.id}
            entry={entry}
            sectionType={sectionType}
            change={(e, type) => change(e, type)}
            remove={(e, type) => remove(e, type)}
          />
        ))}
      </>
    );
  };

  return (
    <div className={`${sectionType}-input section`}>
      <h2>{heading}</h2>
      {mappedEntries()}
      <Button className={"add"} text={"+"} cb={() => add(sectionType)} />
    </div>
  );
};

export default MappedSection;
