import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  const [show, setshow] = useState(false);

  const showclass = () => {
    setshow(!show);
  };

  // const zoomIMg = (e) => {
  //   let img = document.querySelector('.img-portfolio');
  //   let width = img.offsetWidth;
  //   let height = img.offsetHeight;
  //   let mouseX = img.offsetH;
  //   console.log(mouseX);
  // };
  return (
    <div className="col-8">
      <div className="navbar-menu">
        <h1>Portfolio</h1>
        <div className="navbar-menu-list">
          <ul className={show ? 'ul-lists-active' : 'ul-lists'}>
            <li className="ul-li">
              <Link to="/main" className="li-a">
                About me
              </Link>
            </li>
            <li className="ul-li">
              <a href="#" className="li-a">
                Resume
              </a>
            </li>
          </ul>
          <i onClick={showclass} className="fas fa-list list-menu"></i>
        </div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio">
          <img src="img/dog.png" className="img-portfolio" alt=""></img>
          <h4 style={{ textAlign: 'center' }}>
            <a href="https://infallible-morse-b20e48.netlify.app/">Dog</a>
          </h4>
        </div>
        <div className="portfolio">
          <img src="img/sirk.png" className="img-portfolio"></img>
          <h4 style={{ textAlign: 'center' }}>
            <a href="https://infallible-morse-b20e48.netlify.app/">Sirk</a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
