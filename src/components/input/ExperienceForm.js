import React from "react";
import Button from "../Button";

const ExperienceForm = ({ entry, sectionType, change, remove }) => {
  return (
    <div className="form-wrap">
      <form className="experience-form" id={entry.id}>
        <label htmlFor="title">Job title:</label>
        <input
          type="text"
          name="title"
          value={entry.title}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="employer">Employer:</label>
        <input
          type="text"
          name="employer"
          value={entry.employer}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="duties">Duties:</label>
        <textarea
          type="text"
          name="duties"
          value={entry.duties}
          onChange={(e) => change(e, sectionType)}
        ></textarea>
        <label htmlFor="start">Start:</label>
        <input
          type="month"
          name="start"
          value={entry.start}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="end">End:</label>
        <input
          type="month"
          name="end"
          value={entry.end}
          onChange={(e) => change(e, sectionType)}
        />
        <Button
          className={"remove"}
          text={"–"}
          cb={(e) => remove(e, sectionType)}
        />
      </form>
    </div>
  );
};

export default ExperienceForm;
