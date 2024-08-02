import React from "react";

function ButtonBanner({text, classe}) {
  return (
    <button className={classe}>{text}</button>
  );
}

export default ButtonBanner;