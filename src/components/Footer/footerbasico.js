import React from 'react';
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import imgTickets from '../../img/nuestroTicket.png';

const Footer = () => {
  return (
    <>
      <div>
        {/* Contenido del componente */}
        <footer
          className="footerdesign"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          {/* Contenido del footer */}
          <li
            className="text"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <a className="navbar-brand" id="textNav">
              <img
                src={imgTickets}
                alt="Logo"
                height="50"
                id="imgTickets"
                className="img-position"
              />
            </a>
          </li>
        </footer>
      </div>
    </>
  );
};

export default Footer;
