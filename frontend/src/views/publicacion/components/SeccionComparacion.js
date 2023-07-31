import React from 'react';

const SeccionComparacion = ({ currentSection }) => {
  return (
    <section
      id="comparacion"
      style={{ display: currentSection === 'comparacion' ? 'block' : 'none' }}
    >
      <h2>Sección Comparacion</h2>
      <p>Texto para la sección comparacion.</p>
      <br />
    </section>
  );
};

export default SeccionComparacion;
