import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart,
  faShare 
} from '@fortawesome/free-solid-svg-icons';

const Buttons = () => {
  return (
    <div className="comp-buttons">
      <button>Contactar</button>
      <button>
      <FontAwesomeIcon icon={faShare} />
      </button>
      <button>
      <FontAwesomeIcon icon={faHeart}/>
      </button>
    </div>
  );
};

export default Buttons;
