import React from "react";
import './footer.css';
import imgTickets from '../../img/nuestroTicket.png';
import 'bootstrap/dist/css/bootstrap.css';


const Footer = () => {

    return (
        <>
            <div>
                <a class="navbar-brand" id="textNav">
                    <img src={imgTickets} alt="Logo" height="50" id="imgTickets" class="img-position" />
                </a>
                {/* Contenido del componente */}
                <footer className="footerdesign">
                    {/* Contenido del footer */}
                    <li class="text">
                        <a class="nav-link" id="textNav">
                            <span>@CopyRight 2023</span>
                        </a>
                    </li>
                </footer>
            </div>

        </>

    );

}

export default Footer;