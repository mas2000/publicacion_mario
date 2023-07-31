import React from 'react';

const Navigation = ({ handleNavClick, currentSection }) => {
  return (
    <header className='comp-header'>
      <nav className='comp-nav'>
        <ul>
          <li>
            <a
              href="#principal"
              onClick={() => handleNavClick('principal')}
              className={currentSection === 'principal' ? 'active' : ''}
            >
              Principal
            </a>
          </li>
          <li>
            <a
              href="#multimedia"
              onClick={() => handleNavClick('multimedia')}
              className={currentSection === 'multimedia' ? 'active' : ''}
            >
              Multimedia
            </a>
          </li>
          <li>
            <a
              href="#comparacion"
              onClick={() => handleNavClick('comparacion')}
              className={currentSection === 'comparacion' ? 'active' : ''}
            >
              Comparacion de mercado
            </a>
          </li>
          <li>
            <a
              href="#estadisticas"
              onClick={() => handleNavClick('estadisticas')}
              className={currentSection === 'estadisticas' ? 'active' : ''}
            >
              Estadisticas
            </a>
          </li>
        </ul>
        <hr />
        <br />
      </nav>
    </header>
  );
};

export default Navigation;
