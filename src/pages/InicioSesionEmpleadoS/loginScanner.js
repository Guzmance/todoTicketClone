import React from 'react';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footerbasico';
import '../../pages/main.css';

const LoginScanner = () => {
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
          REGISTRO A EVENTOS
        </button>
      </div>
      <Footer />
    </>
  );
};

export default LoginScanner;