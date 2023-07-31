import React, { useState } from 'react';

const SeccionPrincipal = ({ estateData, currentSection, isDescriptionVisible, toggleText }) => {
  return (
    <section
      id="principal"
      style={{ display: currentSection === 'principal' ? 'block' : 'none' }}
    >
      <div className='Titles'>
        <div className='Title'>
          <div>
            <h3>{estateData?.dataBasic?.title}</h3>  

            <a href='https://www.google.com.ar/maps/preview'><h4><img src="/location.svg" alt="" />Ver lugar</h4></a>
            
          </div>
      </div>
      <br/>


      <div className='prices'>
        <div>
          <h3>{estateData?.dataBasic?.currency} {estateData?.dataBasic?.price}</h3>
          </div>
          <div>
          <p>{estateData?.location?.country}, {estateData?.location?.province}, {estateData?.location?.locality}, {estateData?.location?.streetName} {estateData?.location?.streetNumber}</p>
          </div>
        </div>
    <br />

      <div className="icon-text">
      <img src="/vector2.svg" alt="" />
      <img src="/vector1.svg" alt="" />
        <span> {estateData?.surface?.terrain} m²</span>
        <img src="/vector3.svg" alt="" />
        <span> {estateData?.surface?.covered} m² </span>
        <img src="/vector4.svg" alt="" />
        <span>{estateData?.mainFeatures?.bedroomsQuantity} Dormitorios</span>
        <img src="/vector5.svg" alt="" />
        <span> {estateData?.mainFeatures?.bathroomsQuantity} Baños</span>
        <img src="/vector6.svg" alt="" />
        <span>{estateData?.mainFeatures?.garagesQuantity} Cochera</span>
        {}
      </div>
      <br />
      <hr />
      <br />
      <h3>Descripcion</h3>
      <div id="long-text" className={isDescriptionVisible ? 'visible' : 'hidden'}>
    
        <p>
        {estateData?.additionalInformation?.description}

        </p>
        <br />
      </div>
      <a id="toggle-link" className="show-more" onClick={toggleText}>
        {isDescriptionVisible
          ? 'Ocultar descripcion completa'
          : 'Ver descripcion completa'}      <br />
      </a>
      <br />
      <hr />
      <br />
      <h3>Mira lo que ofrece esta propiedad</h3><br/>
      <h3 className='specifications'><img src="/home.svg" alt=""/>Caracteristicas Principales</h3>
      <div className="icon-text">
        <span>{estateData?.mainFeatures?.bedroomsQuantity} Dormitorios</span>
        <span>{estateData?.mainFeatures?.bathroomsQuantity} Baños</span>
        <span>{estateData?.mainFeatures?.garagesQuantity} Cochera</span>
        {}
      </div>
      <br />
      <hr />
      <br />
      <h3 className='specifications'><img src="/light.svg" alt=""/>Servicios</h3>
      <div className="icon-text">
        <span>Agua corriente</span>
        <span>Gas natural</span>
        <span>Internet</span>
        <span>Luz</span>
        {}
      </div>
      <br />
      <hr />
      <br />
      <h3 className='specifications'><img src="/ambient.svg" alt=""/>Ambientes</h3>
      <div className="icon-text">
        <span>Cocina</span>
        <span>Comedor</span>
        <span>Escritorio</span>
        <span>Lavadero</span>
        <span>Living comedor</span>
        <span>Living</span>
        <span>Toilette</span><br />
        {}
      </div>
      <br />
      <hr />
      <br />
      <h3 className='specifications'><img src="/inst.svg" alt=""/>Instalaciones</h3>
      <div className="icon-text">
        <span>Aire acondicionado</span>
        <span>Calefaccion</span>
        
        {}
      </div>
      <br />
      <hr />
      <br />
      </div>
    </section>
  );
};

export default SeccionPrincipal;
