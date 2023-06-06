import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footerbasico';
import '../main.css';

const LoginEst = () => {
  return (
    <>
      <Header />
      <div id="ContentButtons" style={{ textAlign: 'center' }}>
        <button
          type="button"
          class="btn"
          style={{ display: 'block' }}
          id="btnColor"
        >
          ESTADISTICAS
        </button>
      </div>
      <Footer />
    </>
  );
};

export default LoginEst;