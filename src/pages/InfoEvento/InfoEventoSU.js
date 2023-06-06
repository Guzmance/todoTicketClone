import React, { useState } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footerbasico';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import img9 from '../../img/img9.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './infoevento.css';

const InfoEventosSU = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <div style={{ flex: 1 }}>
          <div className="text-center w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="container p-3 mb-2">
              <div className="card bg-transparent">
                <div class="card-header text-white text">
                  <p class="h3">THE WEEKND - END TOUR</p>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-4">
                      <img
                        src={img9}
                        alt="imagen-1"
                        style={{ height: '320px', width: '230px' }}
                        class="img-rounded"
                      />
                    </div>
                    <div class="col-md-8">
                      {/* Info Container*/}
                      <div class="container w-100">
                        <div class="card bg-transparent">
                          <div class="card-body">
                            <div
                              class="textcontent text-start"
                              style={{ color: 'white' }}
                            >
                              <p
                                class="h6"
                                id="text-color"
                                style={{ lineHeight: '0.8' }}
                              >
                                Participando: the Weekend
                              </p>
                              <p
                                class="h6"
                                id="text-color"
                                style={{ lineHeight: '0.8' }}
                              >
                                Fecha: 30 de agosto
                              </p>
                              <p
                                class="h6"
                                id="text-color"
                                style={{ lineHeight: '0.8' }}
                              >
                                Hora: 19 hrs
                              </p>
                              <p
                                class="h6"
                                id="text-color"
                                style={{ lineHeight: '0.8' }}
                              >
                                Duracion: 4 hrs
                              </p>
                              <p
                                class="h6"
                                id="text-color"
                                style={{ lineHeight: '0.8' }}
                              >
                                Lugar: Estadio Cuscatlan
                              </p>
                              <p
                                class="h6"
                                id="text-color"
                                style={{ lineHeight: '0.8' }}
                              >
                                Categoria: Concierto
                              </p>
                              <p
                                class="h6"
                                id="text-color"
                                style={{ lineHeight: '0.8' }}
                              >
                                Patrocinadores: Monster Energy, Coca Cola
                              </p>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div
                              class="textcontent text-start"
                              style={{ color: 'white' }}
                            >
                              <p class="h5" id="text-color">
                                Localidades:{' '}
                              </p>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div id=" container w-100">
                              <table class="table" id="tableRoles">
                                <thead>
                                  <tr
                                    style={{
                                      backgroundColor: 'red',
                                      color: 'white',
                                    }}
                                  >
                                    <th scope="col">Localidades</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Capacidad</th>
                                  </tr>
                                </thead>
                                <tbody
                                  style={{
                                    backgroundColor: 'gray',
                                    color: 'white',
                                  }}
                                >
                                  <tr>
                                    <th scope="row">ULTRA VIP FAN</th>
                                    <td>$200</td>
                                    <td>1000</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">VIP</th>
                                    <td>$100</td>
                                    <td>2000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-5 mb-3 text-end pr-0">
                              <button type="button" className="btn btn-danger">
                                Modificar Evento
                              </button>
                            </div>
                            <div className="col-md-6 text-end pl-0">
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleModalOpen}
                              >
                                Desactivar Evento
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <Modal
        show={modalIsOpen}
        onHide={handleModalClose}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <p style={{ color: 'white', textAlign: 'center' }}>
            ¿Estás seguro de que deseas desactivar el evento?
          </p>
          {/* Agrega el contenido adicional del modal aquí */}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleModalClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleModalClose}>
            Desactivar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InfoEventosSU;
