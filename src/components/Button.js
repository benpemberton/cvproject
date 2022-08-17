import React from "react";

const Button = ({ className, cb, text }) => {
  return (
    <button className={className} onClick={(e) => cb(e)}>
      {text}
    </button>
  );
};

export default Button;
