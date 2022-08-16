import React, { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import InputSheet from "./InputSheet";
import OutputSheet from "./OutputSheet";
import {
  personalExample,
  educationExample,
  experienceExample,
} from "./exampleCV";
import uniqid from "uniqid";
import "../app.css";

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
    setPersonal(personalExample);
    setEducation(educationExample);
    setExperience(experienceExample);
  }

  const printRef = useRef();

  const pageStyle = `
  @page {
    size: 80mm 50mm;
  }

  @media all {
    .pagebreak {
      display: none;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }
`;

  return (
    <div className="wrap">
      <div className="header">
        <h1>CV Template</h1>
        <button className="example" onClick={() => replaceState()}>
          Example CV
        </button>

        <ReactToPrint
          pageeStyle={pageStyle}
          trigger={() => <button className="save-pdf">Download PDF</button>}
          content={() => printRef.current}
        />
        {/* <button className="save-pdf" onClick={() => handlePrint()}>
          Download PDF
        </button> */}
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
          ref={printRef}
          personal={personal}
          education={education}
          experience={experience}
        />
      </div>
    </div>
  );
};

export default App;
