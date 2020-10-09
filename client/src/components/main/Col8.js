import React from 'react';

import Portfolio from './Portfolio';
import '../main/main.css';
import Col4 from './Col4';

function Col8() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Col4 />
          <Portfolio></Portfolio>
        </div>
      </div>
    </>
  );
}

export default Col8;
