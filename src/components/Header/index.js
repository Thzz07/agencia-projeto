import React from "react";
import {
  FaEnvelope,
  FaHome,
  FaMapMarkedAlt,
  FaSuitcase,
  FaComments,
} from "react-icons/fa";
import "./style.css";
import NavItem from "../Nav/index.js";

function Header() {
  return (
    <div className="App">
      <header className="header">
        <h1>Senai Viagens</h1>
        <nav>
          <ul>
            <NavItem link="#home" icon={FaHome} text="HOME" />
            <NavItem link="#destinos" icon={FaMapMarkedAlt} text="DESTINOS" />
            <NavItem link="#pacotes" icon={FaSuitcase} text="PACOTES" />
            <NavItem link="#depoimentos" icon={FaComments} text="DEPOIMENTOS" />
            <NavItem link="#contato" icon={FaEnvelope} text="CONTATO" />
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;