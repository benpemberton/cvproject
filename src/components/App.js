import React, { useState, useRef } from "react";
import Header from "./Header";
import SheetsWrap from "./SheetsWrap";
import InputSheet from "./input/InputSheet";
import OutputSheet from "./output/OutputSheet";
import {
  personalExample,
  educationExample,
  experienceExample,
} from "../utils/exampleCV";
import uniqid from "uniqid";
import "../sass/app.scss";

const App = () => {
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

  const printRef = useRef();

  function changeInfo(e, type) {
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

  function addEntry(type) {
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

  function removeEntry(e, type) {
    const { parentNode } = e.target;
    e.preventDefault();
    type === "education"
      ? setEducation(education.filter((entry) => entry.id !== parentNode.id))
      : setExperience(experience.filter((entry) => entry.id !== parentNode.id));
  }

  function replaceState() {
    setPersonal(personalExample);
    setEducation(educationExample);
    setExperience(experienceExample);
  }

  return (
    <>
      <Header replaceState={replaceState} printRef={printRef} />
      <SheetsWrap>
        <InputSheet
          change={changeInfo}
          add={addEntry}
          remove={removeEntry}
          personal={personal}
          education={education}
          experience={experience}
        />
        <OutputSheet
          ref={printRef}
          personal={personal}
          education={education}
          experience={experience}
        />
      </SheetsWrap>
    </>
  );
};

export default App;
