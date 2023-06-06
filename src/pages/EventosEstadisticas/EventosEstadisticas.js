import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footerbasico';
import './eventosEst.css';

const EventosEstadisticas = () => {
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

        <div class="d-flex justify-content-end px-5 mt-3">
          <nav class="navbar navbar-light bg-transparent">
            <form class="form-inline d-flex">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-danger my-2 my-sm-0 mx-3" type="submit">
                Search
              </button>
            </form>
          </nav>
        </div>

        <h3 id="textGestionUser">ESTADÍSTICAS POR EVENTO</h3>
        <div id="ButtonContainer" class="d-flex justify-content-between mb-4">
          <div class="dropdown">
            <button
              class="btn btn-danger dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categoria
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Opción 1
              </a>
              <a class="dropdown-item" href="#">
                Opción 2
              </a>
              <a class="dropdown-item" href="#">
                Opción 3
              </a>
            </div>
          </div>
        </div>

        <div id="containerTable">
          <table class="table" id="tableRoles">
            <thead>
              <tr
                style={{
                  backgroundColor: 'red',
                  color: 'white',
                  borderRadius: '15px',
                }}
              >
                <th scope="col">EVENTO</th>
                <th scope="col">ESTADO</th>
                <th scope="col">INFO</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: 'gray', color: 'white' }}>
              <tr>
                <th scope="row">The Weeknd Tour</th>
                <td>Activo</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger px-4"
                    style={{
                      float: 'right',
                      marginTop: '1%',
                      marginRight: '38%',
                    }}
                  >
                    Ver
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">El Cascanueces</th>
                <td>Activo</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger px-4"
                    style={{
                      float: 'right',
                      marginTop: '1%',
                      marginRight: '38%',
                    }}
                  >
                    Ver
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">Rock Fest</th>
                <td>Inactivo</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger px-4"
                    style={{
                      float: 'right',
                      marginTop: '1%',
                      marginRight: '38%',
                    }}
                  >
                    Ver
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventosEstadisticas;