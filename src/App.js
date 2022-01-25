import React, { useState, useEffect } from "react";
import Personal from "./components/Personal";
import Section from "./components/Section";
import EducationForm from "./components/EducationForm";
import WorkForm from "./components/WorkForm";
import uniqid from "uniqid";
import "./app.css";

function App() {
  const [editing, setEditing] = useState(true);

  const [personal, setPersonal] = useState({
    first: "",
    last: "",
    email: "",
    mobile: "",
  });

  const [education, setEducation] = useState([
    {
      subject: "",
      institution: "",
      start: "",
      end: "",
      id: uniqid(),
    },
  ]);

  const [work, setWork] = useState([
    {
      title: "",
      employer: "",
      duties: "",
      start: "",
      end: "",
      id: uniqid(),
    },
  ]);

  function handleChange(e, type) {
    const { name, value, parentNode } = e.target;
    if (type === "personal") {
      setPersonal({ ...personal, [name]: value });
    }
    if (type === "education") {
      const newArray = editArray(education);
      setEducation([...newArray]);
    }
    if (type === "work") {
      const newArray = editArray(work);
      setWork([...newArray]);
    }

    function editArray(stateVar) {
      const index = stateVar.findIndex(
        (section) => section.id === parentNode.id
      );

      let newArray = [...stateVar];

      const obj = { ...newArray[index] };

      obj[name] = value;

      newArray[index] = obj;

      return newArray;
    }
  }

  function addSection(type) {
    if (type === "education") {
      setEducation([
        ...education,
        {
          subject: "",
          institution: "",
          start: "",
          end: "",
          id: uniqid(),
        },
      ]);
    } else {
      setWork([
        ...work,
        {
          title: "",
          employer: "",
          duties: "",
          start: "",
          end: "",
          id: uniqid(),
        },
      ]);
    }
  }

  function removeSection(e, type) {
    const { parentNode } = e.target;
    e.preventDefault();
    type === "education"
      ? setEducation(
          education.filter((section) => section.id !== parentNode.id)
        )
      : setWork(work.filter((section) => section.id !== parentNode.id));
  }

  function saveButton() {
    return editing ? (
      <button className="save" onClick={() => setEditing(!editing)}>
        Save
      </button>
    ) : (
      <button className="edit" onClick={() => setEditing(!editing)}>
        Edit
      </button>
    );
  }

  return (
    <div className="wrap">
      <div className="header">
        <h1>CV Template</h1>
      </div>
      <div className="personal-box section">
        <Personal
          editing={editing}
          sectionType="personal"
          handler={handleChange}
          {...personal}
        />
      </div>
      <div className="edu-box section">
        <h2>Education</h2>
        <Section
          editing={editing}
          sections={education}
          sectionType="education"
          handler={handleChange}
          add={addSection}
          remove={removeSection}
          form={EducationForm}
        />
      </div>
      <div className="work-box section">
        <h2>Work</h2>
        <Section
          editing={editing}
          sections={work}
          sectionType="work"
          handler={handleChange}
          add={addSection}
          remove={removeSection}
          form={WorkForm}
        />
      </div>
      {saveButton()}
    </div>
  );
}

export default App;
