import React, { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useHistory } from 'react-router-dom';
import '../register/register.css';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [eror, seteror] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async () => {
    try {
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
        <ToastContainer draggable={false} transition={Zoom} />
        <div className="wrapper">
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
              Kirish
            </button>
          </div>
          <div>
            <p className="question">
              Akauntingiz yoqmi{' '}
              <Link className="a" to="/register">
                Ro'yxatdan o'tish
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
