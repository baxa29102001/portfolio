import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Rezume() {
  const [show, setshow] = useState(false);

  const showclass = () => {
    setshow(!show);
  };
  return (
    <div className="col-8">
      <div className="navbar-menu">
        <h1>Resume</h1>
        <div className="navbar-menu-list">
          <ul className={show ? 'ul-lists-active' : 'ul-lists'}>
            <li className="ul-li">
              <Link to="/main" className="li-a">
                About me
              </Link>
            </li>
            <li className="ul-li">
              <a href="/portfolio" className="li-a">
                Portfolio
              </a>
            </li>
          </ul>
          <i onClick={showclass} className="fas fa-list list-menu"></i>
        </div>
      </div>
      <div className="resume-container">
        <div className="edu-job-information">
          <div className="edu-info">
            <div className="edu-info-img">
              <img src="img/university-degree.png" alt=""></img>
              <h2 style={{ margin: '5px 5px' }}>Education</h2>
            </div>
            <div>
              <p>World Language university student</p>
              <p>Pdp student for 3 month</p>
              <p>Currently self-study programming</p>
            </div>
          </div>
          <div className="edu-info">
            <div className="edu-info-img">
              <img src="img/programmer.png" alt=""></img>
              <h2 style={{ margin: '10px 5px' }}>Experience</h2>
            </div>
            <p style={{ margin: '5px 0' }}>
              {' '}
              No job expirience until this day but I try to gain expirience
              without job{' '}
            </p>
          </div>
        </div>
        <div className="job-skills">
          <h2 style={{ margin: '0 30px' }}>Front End </h2>
          <div className="html">
            <p>Html</p>
            <p style={{ color: 'black' }}>80%</p>
          </div>
          <div className="css">
            <p>Css</p>
            <p style={{ color: 'black' }}>75%</p>
          </div>
          <div className="js">
            <p>JS</p>
            <p style={{ color: 'black' }}>70%</p>
          </div>
          <div className="bootstarap">
            <p>Bootstarap</p>
            <p style={{ color: 'black' }}>75%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rezume;
