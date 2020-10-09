import React from 'react';
import { FaInstagram, FaTelegram, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail, SiGooglescholar } from 'react-icons/si';
import { FcCalendar } from 'react-icons/fc';
import '../main/main.css';

function Col4() {
  return (
    <div className="col-4">
      <div className="img-container">
        <img
          src="https://i.pinimg.com/originals/be/47/4b/be474b0a5f30040b238bafbfbdf2eebd.jpg"
          alt=""
          className="img"
        ></img>
        <div className="text-container">
          <p className="name">
            Bohodir <span className="black">Rahmonov</span>
          </p>
          <p className="job">Web Developer</p>

          <div className="icons">
            <a href="https://www.instagram.com/_rahmonov.b_/">
              <FaInstagram
                size="25px"
                className="icon-instagram"
                // color="black"
              />
              <a href="https://facebook.com">
                <SiGmail
                  className="icon-email"
                  size="25px"
                  color="black"
                ></SiGmail>
              </a>
            </a>
            <a href="https://web.telegram.org/#/im">
              <FaTelegram
                className="icon-telegram"
                color="black"
                size="25px"
              ></FaTelegram>
            </a>
          </div>
        </div>
      </div>

      <div className="about-container">
        <p>
          <FcCalendar
            size="20px"
            color="black"
            className="about-container-icons"
          ></FcCalendar>{' '}
          October 29,2001
        </p>
        <p>
          <SiGooglescholar
            size="20px"
            className="about-container-icons"
          ></SiGooglescholar>{' '}
          Jahon tillar university
        </p>
        <p>
          <FaPhoneAlt
            color="black"
            size="20px"
            className="about-connatiner-icons"
          ></FaPhoneAlt>
          {''}
          +998946332193
        </p>
      </div>
      <div className="logo-container">
        <div className="js-logo">
          <h3>JS</h3>
        </div>
        <div className="nodejs-logo">
          <div className="nodejs">
            <img src="img/yozuv.png" alt=""></img>
          </div>
        </div>
        <div className="reactjs-logo">
          <img src="img/logo192.png" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Col4;
