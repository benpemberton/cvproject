import React, { useState } from "react";
import InputSheet from "./InputSheet";
import OutputSheet from "./OutputSheet";
import {
  personalExample,
  educationExample,
  experienceExample,
} from "./exampleCV";
import uniqid from "uniqid";
import "../app.css";

function App() {
  const [personal, setPersonal] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    statement: "",
  });

  const [education, setEducation] = useState([
    {
      subject: "",
      institution: "",
      qualification: "",
      start: "",
      end: "",
      id: uniqid(),
    },
  ]);

  const [experience, setExperience] = useState([
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
    if (type === "experience") {
      const newArray = editArray(experience);
      setExperience([...newArray]);
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
      setExperience([
        ...experience,
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
      : setExperience(experience.filter((entry) => entry.id !== parentNode.id));
  }

  function replaceState() {
    console.log(personalExample);
    setPersonal(personalExample);
    setEducation(educationExample);
    setExperience(experienceExample);
  }

  return (
    <div className="wrap">
      <div className="header">
        <h1>CV Template</h1>
        <button className="example" onClick={() => replaceState()}>
          Example CV
        </button>
      </div>
      <div className="sheets-wrap">
        <InputSheet
          editing={true}
          handler={handleChange}
          add={addSection}
          remove={removeSection}
          personal={personal}
          education={education}
          experience={experience}
        />
        <OutputSheet
          personal={personal}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
}

export default App;
