import React, { useState } from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footerbasico';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import gris from '../../img/gris.jpeg';
import 'bootstrap/dist/css/bootstrap.css';
import './addEvento.css';

const AddEvento = () => {
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
            <div className="container px-5 mb-2">
              <div className="card bg-transparent">
                <div class="card-header text-white text mt-4">
                  <p class="h3">AGREGAR EVENTO</p>
                </div>
                <div class="card-body">
                  {/*Desde aqui*/}
                  <div className="row">
                    <div className="col-md-4">
                      <div
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{ height: '100%' }}
                      >
                        <img
                          src={gris}
                          alt="imagen-1"
                          style={{ height: '320px', width: '320px' }}
                          className="img-rounded"
                        />
                        <div className="col-md-6 mt-3">
                          <button
                            type="button"
                            className="btn btn-danger w-100"
                          >
                            Subir Imagen
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-8">
                      {/* Info Container*/}
                      <div className="container w-100">
                        <div className="card bg-transparent">
                          <div className="card-body">
                            <div
                              className="textcontent text-start"
                              style={{
                                color: 'white',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '20px',
                              }}
                            >
                              <div
                                style={{
                                  justifySelf: 'end',
                                  display: 'grid',
                                  gridTemplateRows: 'repeat(8, auto)',
                                  alignItems: 'center',
                                  marginBottom: '20px',
                                }}
                              >
                                <p
                                  className="h6"
                                  id="text-color"
                                  style={{
                                    lineHeight: '0.8',
                                    textAlign: 'right',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                  }}
                                >
                                  Título:
                                </p>
                                <p
                                  className="h6"
                                  id="text-color"
                                  style={{
                                    lineHeight: '0.8',
                                    textAlign: 'right',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                  }}
                                >
                                  Participando:
                                </p>
                                <p
                                  className="h6"
                                  id="text-color"
                                  style={{
                                    lineHeight: '0.8',
                                    textAlign: 'right',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                  }}
                                >
                                  Fecha:
                                </p>
                                <p
                                  className="h6"
                                  id="text-color"
                                  style={{
                                    lineHeight: '0.8',
                                    textAlign: 'right',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                  }}
                                >
                                  Hora:
                                </p>
                                <p
                                  className="h6"
                                  id="text-color"
                                  style={{
                                    lineHeight: '0.8',
                                    textAlign: 'right',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                  }}
                                >
                                  Duración:
                                </p>
                                <p
                                  className="h6"
                                  id="text-color"
                                  style={{
                                    lineHeight: '0.8',
                                    textAlign: 'right',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                  }}
                                >
                                  Lugar:
                                </p>
                                <p
                                  className="h6"
                                  id="text-color"
                                  style={{
                                    lineHeight: '0.8',
                                    textAlign: 'right',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                  }}
                                >
                                  Categoría:
                                </p>
                                <p
                                  className="h6"
                                  id="text-color"
                                  style={{
                                    lineHeight: '0.8',
                                    textAlign: 'right',
                                    marginBottom: '15px',
                                    marginTop: '15px',
                                  }}
                                >
                                  Patrocinadores:
                                </p>
                              </div>
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateRows: 'repeat(8, auto)',
                                  alignItems: 'center',
                                  marginBottom: '20px',
                                }}
                              >
                                <input
                                  type="text"
                                  id="miCajaTexto"
                                  style={{
                                    borderRadius: '10px',
                                    padding: '8px',
                                  }}
                                />
                                <input
                                  type="text"
                                  id="miCajaTexto"
                                  style={{
                                    borderRadius: '10px',
                                    padding: '8px',
                                    marginTop: '5px',
                                  }}
                                />
                                <input
                                  type="text"
                                  id="miCajaTexto"
                                  style={{
                                    borderRadius: '10px',
                                    padding: '8px',
                                    marginTop: '5px',
                                  }}
                                />
                                <input
                                  type="text"
                                  id="miCajaTexto"
                                  style={{
                                    borderRadius: '10px',
                                    padding: '8px',
                                    marginTop: '5px',
                                  }}
                                />
                                <input
                                  type="text"
                                  id="miCajaTexto"
                                  style={{
                                    borderRadius: '10px',
                                    padding: '8px',
                                    marginTop: '5px',
                                  }}
                                />
                                <input
                                  type="text"
                                  id="miCajaTexto"
                                  style={{
                                    borderRadius: '10px',
                                    padding: '8px',
                                    marginTop: '5px',
                                  }}
                                />
                                <input
                                  type="text"
                                  id="miCajaTexto"
                                  style={{
                                    borderRadius: '10px',
                                    padding: '8px',
                                    marginTop: '5px',
                                  }}
                                />
                                <input
                                  type="text"
                                  id="miCajaTexto"
                                  style={{
                                    borderRadius: '10px',
                                    padding: '8px',
                                    marginTop: '5px',
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6 text-start">
                      <p
                        className="h5"
                        id="text-color"
                        style={{ color: 'white' }}
                      >
                        Localidades:
                      </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-secondary "
                        style={{ marginRight: '10px' }}
                      >
                        +
                      </button>
                      <button type="button" className="btn btn-secondary">
                        -
                      </button>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="container w-100">
                      <table className="table" id="tableRoles">
                        <thead>
                          <tr
                            style={{ backgroundColor: 'red', color: 'white' }}
                          >
                            <th scope="col">Localidades</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Capacidad</th>
                          </tr>
                        </thead>
                        <tbody
                          style={{ backgroundColor: 'gray', color: 'white' }}
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

                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleModalOpen}
                      >
                        Guardar Evento
                      </button>
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

export default AddEvento;
