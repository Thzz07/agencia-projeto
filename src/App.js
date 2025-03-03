import React from "react";
import {
  FaHotel,
  FaPlane,
  FaWalking,
  FaBus,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./App.css";
import Header from "./components/Header/index.js";
import Destinos from "./components/Destinos/index.js";
import Banner from "./components/Banner/index.js";
import FooterPage from "./components/Footer/index.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <section id="destinos" className="destinos-populares">
        <h2>Destinos Populares</h2>
        <div className="destinos-grid">
          <Destinos link="https://oficinadeinverno.com.br/cdn/shop/articles/eiffel-tower-sunrise1.jpg?v=1659494576" pais="Paris" code="FRA" text="Paris, conhecida como a cidade do amor, oferece uma mistura de
              cultura, arte e história. Visite a Torre Eiffel, o Museu do Louvre
              e explore as charmosas ruas de Montmartre."/>
              
          <Destinos link="https://classic.exame.com/wp-content/uploads/2017/10/ny-1.jpg?quality=70&strip=info&w=1024" pais="Nova York" code="USA" text="Nova York, a cidade que nunca dorme, é um centro global de
              cultura, moda e finanças. Explore a Times Square, o Central Park e
              desfrute de uma variedade de espetáculos na Broadway."/>

          <Destinos link="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo/toquio-pontos-turisticos.jpg" pais="Tóquio" code="JPN" text="Tóquio é uma metrópole vibrante onde a tradição encontra a
              modernidade. Visite o Templo Senso-ji, o cruzamento de Shibuya e
              experimente a culinária local em izakayas e restaurantes."/>
        </div>
      </section>

      <section id="pacotes" className="pacotes-viagem">
        <h2>Pacotes de Viagem</h2>
        <div className="pacotes-grid">
          <div className="card-pacote">
            <div className="pacote-header">
              <h3>Pacote Europa</h3>
              <div className="preco">
                <span className="preco-anterior">R$ 6.000</span>
                <span className="preco-atual">R$ 5.000</span>
              </div>
            </div>
            <p>
              Aproveite 7 dias inesquecíveis em Paris, Londres e Roma, com
              visitas guiadas aos pontos turísticos mais emblemáticos,
              hospedagem em hotéis 4 estrelas e passagens aéreas inclusas.
            </p>
            <p>Incluem:</p>
            <ul>
              <li>
                <FaHotel /> Hospedagem em hotéis 4 estrelas
              </li>
              <li>
                <FaPlane /> Passagens aéreas ida e volta
              </li>
              <li>
                <FaWalking /> Passeios guiados nas cidades
              </li>
              <li>
                <FaBus /> Transporte entre as cidades
              </li>
            </ul>
            <button type="button" className="btn-comprar">
              Comprar
            </button>
          </div>
          <div className="card-pacote">
            <div className="pacote-header">
              <h3>Pacote EUA</h3>
              <div className="preco">
                <span className="preco-anterior">R$ 5.500</span>
                <span className="preco-atual">R$ 4.500</span>
              </div>
            </div>
            <p>
              Explore as cidades vibrantes de Nova York e Los Angeles por 7
              dias, com hospedagem em hotéis 4 estrelas, passagens aéreas e
              tours guiados pelos pontos mais famosos.
            </p>
            <p>Incluem:</p>
            <ul>
              <li>
                <FaHotel /> Hospedagem em hotéis 4 estrelas
              </li>
              <li>
                <FaPlane /> Passagens aéreas ida e volta
              </li>
              <li>
                <FaWalking /> Passeios guiados nas cidades
              </li>
              <li>
                <FaBus /> Transporte entre as cidades
              </li>
            </ul>
            <button type="button" className="btn-comprar">
              Comprar
            </button>
          </div>
          <div className="card-pacote">
            <div className="pacote-header">
              <h3>Pacote Ásia</h3>
              <div className="preco">
                <span className="preco-anterior">R$ 7.000</span>
                <span className="preco-atual">R$ 6.000</span>
              </div>
            </div>
            <p>
              Descubra a cultura e modernidade de Tóquio, Seul e Pequim em uma
              viagem de 10 dias, com hospedagem luxuosa, passagens aéreas
              inclusas e tours guiados.
            </p>
            <p>Incluem:</p>
            <ul>
              <li>
                <FaHotel /> Hospedagem em hotéis 4 estrelas
              </li>
              <li>
                <FaPlane /> Passagens aéreas ida e volta
              </li>
              <li>
                <FaWalking /> Passeios guiados nas cidades
              </li>
              <li>
                <FaBus /> Transporte entre as cidades
              </li>
            </ul>
            <button type="button" className="btn-comprar">
              Comprar
            </button>
          </div>
          <div className="card-pacote">
            <div className="pacote-header">
              <h3>Pacote América do Sul</h3>
              <div className="preco">
                <span className="preco-anterior">R$ 4.000</span>
                <span className="preco-atual">R$ 3.500</span>
              </div>
            </div>
            <p>
              Desfrute de 7 dias encantadores em Buenos Aires, Santiago e Lima,
              com hospedagem em hotéis 4 estrelas, passagens aéreas e passeios
              guiados pelos principais pontos turísticos.
            </p>
            <p>Incluem:</p>
            <ul>
              <li>
                <FaHotel /> Hospedagem em hotéis 4 estrelas
              </li>
              <li>
                <FaPlane /> Passagens aéreas ida e volta
              </li>
              <li>
                <FaWalking /> Passeios guiados nas cidades
              </li>
              <li>
                <FaBus /> Transporte entre as cidades
              </li>
            </ul>
            <button type="button" className="btn-comprar">
              Comprar
            </button>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="depoimentos">
        <h2>Depoimentos</h2>
        <div className="depoimentos-grid">
          <div className="card-depoimento">
            <div className="depoimento-info">
              <h3>João Silva</h3>
              <blockquote>Foi a melhor viagem da minha vida!</blockquote>
            </div>
          </div>
          <div className="card-depoimento">
            <div className="depoimento-info">
              <h3>Maria Santos</h3>
              <blockquote>
                Experiência incrível e atendimento excelente.
              </blockquote>
            </div>
          </div>
          <div className="card-depoimento">
            <div className="depoimento-info">
              <h3>Ana Costa</h3>
              <blockquote>Recomendo a todos, vale cada centavo.</blockquote>
            </div>
          </div>
          <div className="card-depoimento">
            <div className="depoimento-info">
              <h3>Pedro Oliveira</h3>
              <blockquote>
                Excelente custo-benefício e ótimos guias turísticos.
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="contato">
        <h2>Contato</h2>
        <div className="contato-container">
          <div className="contato-info-form">
            <div className="contato-info">
              <p>
                <FaMapMarkerAlt /> Endereço: Rua Fictícia, 123 - Jaboticabal, SP
              </p>
              <p>
                <FaPhone /> Telefone: (16) 1234-5678
              </p>
              <p>
                <FaWhatsapp /> WhatsApp: (16) 98765-4321
              </p>
              <p>
                <FaEnvelope /> Caso queira enviar um email, preencha os campos
                abaixo:
              </p>
            </div>
            <form className="contato-form">
              <label>
                Nome:
                <input type="text" name="nome" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Mensagem:
                <textarea name="mensagem"></textarea>
              </label>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="contato-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.2810841259775!2d-48.35436492509229!3d-21.613967992949075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b8e1d1fc68a2a7%3A0x72c0741034cbcc!2sSENAI%20-%20Servi%C3%A7o%20Nacional%20de%20Aprendizagem%20Industrial!5e0!3m2!1spt-BR!2sbr!4v1722442541179!5m2!1spt-BR!2sbr"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Agência de Viagens"
            ></iframe>
          </div>
        </div>
      </section>
      <FooterPage />
    </div>
  );
}

export default App;