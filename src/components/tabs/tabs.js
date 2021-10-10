import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function tabs() {
  return (
    <div className="d-none d-md-block">
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="First" title="First">
          First
        </Tab>
        <Tab eventKey="Second" title="Second">
          Second
        </Tab>
        <Tab eventKey="Third" title="Third">
          Third
        </Tab>
      </Tabs>
    </div>
  );
}

export default tabs;
