import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

import { useHistory } from 'react-router-dom';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../register/register.css';

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [eror, seteror] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async () => {
    try {
      const newUser = { email, password, name };

      await axios.post('/register', newUser);

      const loginRes = await axios.post('/login', {
        email,
        password,
      });
      console.log(loginRes);

      setUserData({
        token: loginRes.data.token,
        userId: loginRes.data.user,
      });
      localStorage.setItem('auth-token', loginRes.data.token);
      history.push('/main');
    } catch (error) {
      console.log(error.response.data.message);
      error.response.data.message && seteror(error.response.data.message);
      toast.error(eror);
    }
  };
  return (
    <div className="container">
      <div className="box box1"></div>
      <div className="box box2"></div>
      <div className="box box3"></div>
      <div className="form">
        <h3 className="title">Rahmonov Bohodir</h3>

        <div className="wrapper">
          <ToastContainer draggable={false} transition={Zoom} />
          <div className="input-email">
            <input
              name="email"
              type="text"
              required
              title="Iltmos email kirting"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <div className="paskichiziq"></div>
            <label>Emailingizni kiriting</label>
          </div>

          <div className="input-name">
            <input
              name="name"
              type="text"
              required
              title="Iltmos username kirting"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <div className="underline"></div>
            <label>Username kiriting</label>
          </div>
          <div className="input-password">
            <input
              name="password"
              type="text"
              required
              title="Iltmos parolingizni kirting"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <div className="underline"></div>
            <label>Parolingizni kiriting</label>
          </div>

          <div className="button">
            <button type="submit" onClick={submit}>
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
