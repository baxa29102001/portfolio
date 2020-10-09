import React from 'react';

import Col4 from './Col4';
import Rezume from './Rezume';
import '../main/main.css';

function RezumeList() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Col4 />
          <Rezume></Rezume>
        </div>
      </div>
    </>
  );
}

export default RezumeList;
