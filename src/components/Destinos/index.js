import React from "react";
import "./style.css";
import Flag from "react-world-flags";

function Destinos({link, pais, code, text}) {
  return (
    <div className="card-destino">
      <img
        src={link}
        alt={pais}
        className="imagem-destino"
      />
      <h3>
        <Flag code={code} height="16" className="bandeira" /> {pais}
      </h3>
      <p>
        {text}
      </p>
    </div>
  );
}

export default Destinos;