import React from "react";
import "./style.css";

function Nav({link,icon: Icon, text}) {
  return (
    <li>
      <a href={link}>
        <Icon /> {text}
      </a>
    </li>
  );
}

export default Nav;