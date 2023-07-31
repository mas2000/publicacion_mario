import React, { useState } from 'react';

const Text = ( {estateData} ) => {
  return (
    <div className="comp-text">
      <strong>{estateData?.dataBasic?.estateState}</strong>
    </div>
  );
};

export default Text;
