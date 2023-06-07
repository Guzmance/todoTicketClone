import React from 'react';
import HeaderInicial from '../../components/Header/headerinicial';
import Footer from '../../components/Footer/footerbasico';
import Img5 from '../../img/Img5.jpg';
import img6 from '../../img/img6.jpg';
import img10 from '../../img/img10.jpg';
import img9 from '../../img/img9.jpg';
import img8 from '../../img/img8.jpg';
import img7 from '../../img/img7.jpg';
import img01 from '../../img/img01.png';
import img02 from '../../img/img02.png';
import img03 from '../../img/img03.png';
import './inicial.css';

const Inicial = () => {
  return (
    <>
      <HeaderInicial />
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={img03} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img02} alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={img03} alt="Third slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
      {/**Aqui termina carrousel */}
      <div class="container pb-3">
        <div class="container" style={{ paddingTop: '2%' }}>
          <div class="row justify-content-center">
            <div class="col-lg-2">
              <p class="h1" id="text-color">
                Próximos Eventos
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ paddingTop: '2%' }}>
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="row">
              <div class="col-md-4 mb-4 ml-2">
                <img
                  src={img10}
                  alt="imagen-1"
                  style={{ height: '320px', width: '230px' }}
                  class="img-rounded"
                />
              </div>
              <div class="col-md-4 mb-4 ml-2">
                <img
                  src={img9}
                  alt="imagen-2"
                  style={{ height: '320px', width: '230px' }}
                  class="img-rounded"
                />
              </div>
              <div class="col-md-4 mb-4 ml-2">
                <img
                  src={img8}
                  alt="imagen-1"
                  style={{ height: '320px', width: '230px' }}
                  class="img-rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" style={{ paddingTop: '2%' }}>
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="row">
              <div class="col-md-4 mb-4 ml-2">
                <img
                  src={img6}
                  alt="imagen-1"
                  style={{ height: '320px', width: '230px' }}
                  class="img-rounded"
                />
              </div>
              <div class="col-md-4 mb-4 ml-2">
                <img
                  src={img7}
                  alt="imagen-2"
                  style={{ height: '320px', width: '230px' }}
                  class="img-rounded"
                />
              </div>
              <div class="col-md-4 mb-4 ml-2">
                <img
                  src={Img5}
                  alt="imagen-1"
                  style={{ height: '320px', width: '230px' }}
                  class="img-rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Inicial;
