import React from "react";
import ReactToPrint from "react-to-print";
import Button from "./Button";

const Header = ({ replaceState, printRef }) => {
  return (
    <div className="header">
      <h1>CV Template</h1>
      <Button
        className={"example"}
        text={"Example CV"}
        cb={() => replaceState()}
      />

      <ReactToPrint
        trigger={() => <button className={"save-pdf"}>Download PDF</button>}
        content={() => printRef.current}
      />
    </div>
  );
};

export default Header;
