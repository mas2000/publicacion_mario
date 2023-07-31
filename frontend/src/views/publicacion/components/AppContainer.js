import React, { useState } from 'react';
import BackgroundHouse from './BackgroundHouse';
import Text from './Text';
import Buttons from './Buttons';
import Place from './Place';
import Navigation from './Navigation';
import SeccionPrincipal from './SeccionPrincipal';
import SeccionMultimedia from './SeccionMultimedia';
import SeccionComparacion from './SeccionComparacion';
import Footer from './Footer';

const AppContainer = () => {
  const [currentSection, setCurrentSection] = useState('principal');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleText = () => {
    setIsDescriptionVisible((prev) => !prev);
  };

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  return (

    <div className="App">
      <BackgroundHouse />
      <div className="comp-containers">
        <Text />
        <Buttons />
      </div>
      <Place />
      <Navigation handleNavClick={handleNavClick} currentSection={currentSection} />
      <br />
      <br />
      <div className="comp-secciones">
        <SeccionPrincipal
          currentSection={currentSection}
          isDescriptionVisible={isDescriptionVisible}
          toggleText={toggleText}
        />
        <SeccionMultimedia currentSection={currentSection} />
        <SeccionComparacion currentSection={currentSection} />
      </div>
      <Footer />
    </div>
  );
};

export default AppContainer;
