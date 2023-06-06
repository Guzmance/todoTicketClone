import * as React from 'react';
import '../../pages/main.css';
import '../../App.css';
import './header.css';
import imgTickets from '../../img/nuestroTicket.png';
import 'bootstrap/dist/css/bootstrap.css';

const HeaderInicial = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <a class="navbar-brand" id="textNav">
          <img src={imgTickets} alt="Logo" height="50" id="imgTickets" />
        </a>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/" id="textNav">
                Inicio
              </a>
            
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" id="textNav">
                Eventos
              </a>
            
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" id="textNav">
                Ingresar
              </a>
            
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default HeaderInicial;