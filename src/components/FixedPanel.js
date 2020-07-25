import React from 'react';
import { names } from '../constants/Constants';
import '../styles/FixedPanel.css';

const People = () => names.map(n => {
  return <div className="people" key={n}>{n}</div>;
});

const FixedPanel = () => (
  <div className="fixed-panel">
    <div className="span"><span>&nbsp;</span></div>
    <People />
  </div>
);

export default FixedPanel;
