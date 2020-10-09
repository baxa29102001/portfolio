import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Register from './components/register/Register';
import Register from './components/register/Register';
import UserContext from './context/UserContext';
import Axios from 'axios';
import Login from './components/register/Content1';
import Main from './components/main/Main';
import Portfolio from './components/main/Portfolio';
import './App.css';
import Col4 from './components/main/Col4';
import Col8 from './components/main/Col8';
import RezumeList from './components/main/RezumeList';

function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    userId: undefined,
  });

  useEffect(() => {
    const checkedlogged = async () => {
      let token = localStorage.getItem('auth-token');

      if (token === null) {
        localStorage.setItem('auth-token', '');
        token = '';
      }

      const tokenRes = await Axios.post('/tokenIsValid', null, {
        headers: { 'x-auth-token': token },
      });
      console.log(tokenRes.data);
      if (tokenRes) {
        const userRes = await Axios.get('/data', {
          headers: { 'x-auth-token': token },
        });
        console.log(userRes.data);

        setUserData({
          token,
          userId: userRes.data,
        });
      }
    };

    checkedlogged();
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Router>
          <Route exact path="/" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/portfolio" component={Col8} />
          <Route path="/rezume" component={RezumeList} />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
