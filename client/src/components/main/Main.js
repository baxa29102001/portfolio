import React from 'react';

import Col4 from './Col4';
import Col8 from './Col8';
import '../main/main.css';
import AboutMe from './AboutMe';

export default function Main() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Col4 />
          <AboutMe></AboutMe>
        </div>
      </div>
    </>
  );
}
