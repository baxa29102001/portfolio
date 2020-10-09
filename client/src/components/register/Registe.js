import React, { Component } from 'react';
import '../register/register.css';
// import Content from './Content1';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import Content2 from './Content2';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      active: Content,
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>

          <div className="sloy"></div>
          {/* <div className="form">
            <h3 className="title">Bohodir Rahmonov</h3>
            <Tabs>
              <TabList>
                <Tab>Kirish</Tab>
                <Tab>Ro'yxatdan otish</Tab>
              </TabList>
              <div className="wrapper">
                <TabPanel>
                  <Content></Content>
                </TabPanel>
                <TabPanel>
                  <Content2></Content2>
                </TabPanel>
              </div>
            </Tabs>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Register;
