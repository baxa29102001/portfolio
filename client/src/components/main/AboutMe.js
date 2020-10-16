import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AboutMe() {
  const [show, setshow] = useState(false);

  const showclass = () => {
    setshow(!show);
  };

  return (
    <div className="col-8">
      <div className="navbar-menu">
        <h1>About me</h1>
        <div className="navbar-menu-list">
          <ul className={show ? 'ul-lists-active' : 'ul-lists'}>
            <li className="ul-li">
              <Link to="/portfolio" className="li-a">
                Portfolio
              </Link>
            </li>
            <li className="ul-li">
              <Link to="/rezume" className="li-a">
                Resume
              </Link>
            </li>
          </ul>
          <i onClick={showclass} className="fas fa-list list-menu"></i>
        </div>
      </div>
      <div className="information">
        <p>
          Men Rahmonov Bohodir ishlshni yaxshi koraman oz ustimda{' '}
        </p>
      </div>
      <div className="skill-container">
        <div className="qator-1">
          <div className="front-end">
            <img src="img/html.png" alt="" className="html-png"></img>
            <h4 style={{ padding: ' 37px 12px' }}>
              HTML ; CSS ; SASS ; <br></br> BOOTSTRAP ; JAVASCRIPT ;
              <br />
              ReactJs
            </h4>
          </div>
          <div className="front-end">
            <img src="img/binary-code.png" alt="" className="html-png"></img>
            <h4 style={{ padding: ' 37px 12px' }}>NodeJs ; ExpressJs</h4>
          </div>
        </div>
        <div className="qator-1">
          <div className="front-end">
            <i
              className="fas fa-database "
              style={{ margin: '33px 14px', fontSize: '45px' }}
            ></i>
            <h4 style={{ padding: ' 37px 12px' }}>MongoDb</h4>
          </div>
          <div className="front-end">
            <img src="img/cloud.png" alt="" className="html-png"></img>
            <h4 style={{ padding: ' 43px 12px' }}>Heroku</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
