import React from 'react';

const SeccionEstadisticas = ({ currentSection }) => {
  return (
    <section
      id="estadisticas"
      style={{ display: currentSection === 'estadisticas' ? 'block' : 'none' }}
    >
      <h2>Sección Estadisticas</h2>
      <p>Texto para la sección estadisticas.</p>
      <br />
    </section>
  );
};

export default SeccionEstadisticas;
