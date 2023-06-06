import * as React from 'react';
import '../../pages/main.css';
import '../../App.css';
import './header.css';
import imgTickets from '../../img/nuestroTicket.png';
import imgUser from '../../img/imgUser.png';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <a class="navbar-brand" id="textNav">
          <img src={imgTickets} alt="Logo" height="50" id="imgTickets" />
          STAFF
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
            <a class="nav-link" href="#" id='textNav'>
              <img src={imgUser} alt="Usuario" height="40px" id='imgUser' />
            </a>
            <li class="nav-item">
              <a class="nav-link" href="/" id="textNav">
                Username
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;