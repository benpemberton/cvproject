import React, { useState, useEffect } from "react";
import InputSheet from "./components/InputSheet";
import OutputSheet from "./components/OutputSheet";
import uniqid from "uniqid";
import "./app.css";

function App() {
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
      ? setEducation(education.filter((entry) => entry.id !== parentNode.id))
      : setWork(work.filter((entry) => entry.id !== parentNode.id));
  }

  return (
    <div className="wrap">
      <div className="header">
        <h1>CV Template</h1>
      </div>
      <div className="sheets-wrap">
        <InputSheet
          handler={handleChange}
          add={addSection}
          remove={removeSection}
          personal={personal}
          education={education}
          work={work}
        />
        <OutputSheet personal={personal} education={education} work={work} />
      </div>
    </div>
  );
}

export default App;
