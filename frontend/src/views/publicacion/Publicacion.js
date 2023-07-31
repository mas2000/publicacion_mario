import React from 'react';
import BackgroundHouse from './components/BackgroundHouse.js';
import Text from './components/Text.js';
import Buttons from './components/Buttons.js';
import Place from './components/Place.js';
import Navigation from './components/Navigation.js';
import SeccionPrincipal from './components/SeccionPrincipal.js';
import SeccionMultimedia from './components/SeccionMultimedia.js';
import SeccionComparacion from './components/SeccionComparacion.js';
import Footer from './components/Footer.js';
import SeccionEstadisticas from './components/SeccionEstadisticas.js';
import './css/style.css';
import estateService from '../../services/estate.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AppContainer = () => {
  const [currentSection, setCurrentSection] = useState('principal');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleText = () => {
    setIsDescriptionVisible((prev) => !prev);
  };

  const handleNavClick = (section) => {
    setCurrentSection(section);
  };

  const { _id } = useParams();
  const [estateData, setEstateData] = useState(null);

  useEffect(() => {
    const getEstateData = async () => {
        const { data } = await estateService.house.get(_id);
        setEstateData(data);
    };
    getEstateData();
}, []);
console.log (estateData);

  return (
    <div className="App">
      <BackgroundHouse />
      <div className="containers">
        <Text estateData={estateData}/>
        <Buttons />
      </div>
      <Place estateData={estateData}/>
      <Navigation handleNavClick={handleNavClick} currentSection={currentSection} />
      <br />
      <br />
      <div className="secciones">
        <SeccionPrincipal  
          currentSection={currentSection}
          isDescriptionVisible={isDescriptionVisible}
          toggleText={toggleText}
          estateData={estateData}
        />
        <SeccionMultimedia currentSection={currentSection} />
        <SeccionComparacion currentSection={currentSection} />
        <SeccionEstadisticas currentSection={currentSection} />
      </div>
      <Footer />
    </div>
  );
};

export default AppContainer;
