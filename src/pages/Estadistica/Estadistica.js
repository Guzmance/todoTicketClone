import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footerbasico';
import './estadisticas.css';
import img9 from '../../img/img9.jpg';

const Estadistica = () => {
    return (
        <>
            <Header />
            <div style={{ flex: 1 }}>
                <div className="text-center w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="container p-3 mb-2">
                        <div className="card bg-transparent">
                            <div class="card-header text-white text">
                                <p class="h3">THE WEEKND - END TOUR</p>
                                <p class="h4">EESTADÍSTICAS</p>
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
                                                    Lugar: Estadio Cuscatlan
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-2">
                            <div
                              class="textcontent text-start"
                              style={{ color: 'white' }}
                            >
                              <p class="h5" id="text-color">
                                Estadísticas:{' '}
                              </p>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div id=" container w-100">
                              <table class="table" id="tableRoles" WIDTH="30%">
                                <thead>
                                  <tr
                                    style={{
                                      backgroundColor: 'red',
                                      color: 'white',

                                    }}
                                  >
                                    <th width="50" scope="col">Concepto</th>
                                    <th width="50" scope="col">Valor</th>
                                  </tr>
                                </thead>
                                <tbody
                                  style={{
                                    backgroundColor: 'gray',
                                    color: 'white',
                                  }}
                                >
                                  <tr>
                                    <th scope="row">Asistencia al Evento</th>
                                    <td>2500</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Tickets Vendidos</th>
                                    <td>2450</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Entrada por grupo</th>
                                    <td>60%</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Entrada individual</th>
                                    <td>40%</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">Porcentaje de Asistencia</th>
                                    <td>98%</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div> 
                          <div class="row mt-2">
                            <div
                              class="textcontent text-start"
                              style={{ color: 'white' }}
                            >
                              <p class="h5" id="text-color">
                                Localidades más Populares:{' '}
                              </p>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div id=" container w-100">
                              <table class="table" id="tableRoles" WIDTH="30%">
                                <thead>
                                  <tr
                                    style={{
                                      backgroundColor: 'red',
                                      color: 'white',

                                    }}
                                  >
                                    <th width="50" scope="col">Localidad</th>
                                    <th width="50" scope="col">Cantidad</th>
                                    <th width="50" scope="col">Porcentaje</th>
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
                                    <td>2000</td>
                                    <td>76%</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">ULTRA VIP FAN</th>
                                    <td>600</td>
                                    <td>23%</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div> 
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Estadistica;