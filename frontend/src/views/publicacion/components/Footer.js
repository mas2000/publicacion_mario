import React from 'react';

const Footer = () => {
  return (
    <footer className="comp-footer">
      <div className="container">
        <div className="row">
          <div className="comp-footer-col">
            <h4>Moving360</h4>
            <ul>
              <li>
                <a href="#">Inmuebles en Argentina</a>
              </li>
              <li>
                <a href="#">Publica tu Inmueble</a>
              </li>
              <li>
                <a href="#">Ayuda</a>
              </li>
              <li>
                <a href="#">Mapa del sitio</a>
              </li>
              <li>
                <a href="#">Valuador</a>
              </li>
              <li>
                <a href="#">Garantias de alquiler</a>
              </li>
            </ul>
          </div>
          <div className="comp-footer-col">
            <h4>Paises</h4>
            <ul>
              <li>
                <a href="#">Argentina</a>
              </li>
              <li>
                <a href="#">Brasil</a>
              </li>
              <li>
                <a href="#">Chile</a>
              </li>
              <li>
                <a href="#">Paraguay</a>
              </li>
              <li>
                <a href="#">Uruguay</a>
              </li>
            </ul>
          </div>
          <div className="comp-footer-col">
            <h4>Seguinos</h4>
            <div className="social-links">
              <a href="#">
              <i className="fab fa-instagram"></i>
              </a>
              <br />
              <a href="#">
              <i className="fab fa-instagram"></i>
              </a>
              <br />
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <br />
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="comp-footer-col">
            <h4>Web desarrollada por</h4>
            <p>ELGC System</p>
            <br />
            <img src="/img/img1.jpg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
