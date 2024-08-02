import React from "react";
import ButtonBanner from "../ButtonBanner/index";

function Banner() {
  return (
      <section className="hero">
        <div className="hero-content">
          <h2>Explore o Mundo com a Senai Viagens</h2>
          <p>
            Oferecemos os melhores pacotes de viagens para você e sua família.
            Experiências inesquecíveis aguardam você!
          </p>
          <div className="hero-buttons">
            <ButtonBanner classe="btn-saiba-mais" text="Saiba Mais"/>
            <ButtonBanner classe="btn-reserve-agora" text="Reserve Agora"/>
          </div>
        </div>
      </section>
  );
}

export default Banner;