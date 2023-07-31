import React, { useState } from 'react';

const Place = ( {estateData} )  => {
  
  return (
    <div className="place">
      <h2>{estateData?.dataBasic?.unit} </h2>
    </div>
  );
};

export default Place;
