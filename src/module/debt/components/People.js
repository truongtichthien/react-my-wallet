import React from 'react';
import { names } from '../../../constants/Constants';
import '../styles/People.css';

const People = () => (
  <div className="fixed-panel">
    <div className="span"><span>&nbsp;</span></div>
    {names.map(n => {
      return <div className="people" key={n}>{n}</div>;
    })}
  </div>
);

export default People;
