import React from "react";

const PersonalForm = ({
  sectionType,
  change,
  name,
  address,
  email,
  mobile,
  statement,
}) => {
  return (
    <>
      <form className="personal-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="mobile">Mobile no.:</label>
        <input
          type="tel"
          name="mobile"
          value={mobile}
          onChange={(e) => change(e, sectionType)}
        />
        <label htmlFor="statement">Personal statement:</label>
        <textarea
          name="statement"
          value={statement}
          onChange={(e) => change(e, sectionType)}
        ></textarea>
      </form>
    </>
  );
};

export default PersonalForm;
