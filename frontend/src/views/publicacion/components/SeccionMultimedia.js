import React from 'react';

const SeccionMultimedia = ({ currentSection }) => {
  return (
    <section
      id="multimedia"
      style={{ display: currentSection === 'multimedia' ? 'block' : 'none' }}
    >
      <div className='Titles'>
      <h3>Recorrido 360º</h3>
      <p>Recorre y conoce el inmueble con nuestra tecnologia 360°</p>
      </div>
      <br />
      <iframe className='img360'
        src="https://vtour.cloud/0cdw87ml/o3qw7360/"
        style={{ width: '1366px', height: '800px'  }}
      ></iframe>

    </section>
  );
};

export default SeccionMultimedia;
