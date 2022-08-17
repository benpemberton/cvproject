import React from "react";

const MappedOutput = ({ entries, Entry, sectionType, heading }) => {
  const mappedEntries = () => {
    return (
      <>
        {entries.map((entry) => (
          <Entry key={entry.id} entry={entry} />
        ))}
      </>
    );
  };

  return (
    <div className={`${sectionType}-output`}>
      <h2>{heading}</h2>
      <hr></hr>
      {mappedEntries()}
    </div>
  );
};

export default MappedOutput;
