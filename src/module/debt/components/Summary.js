import React from 'react';
import { names } from '../../../constants/Constants';
import '../styles/People.css';

const Summary = (props) => {
  const total = [];
  return (
    <div className="paid-panel">
      <div className="span"><span>Must Pay</span></div>
      {
        names.map((n, idx) => {
          const totalOwe = props.debtRecords.map((day) => day.debt[idx].owe);
          total[idx] = totalOwe.reduce((a, b) => (a + b), 0);
          return <div className="people" key={n}>{ total[idx] || 0 }</div>;
        })
      }
    </div>
  )
};

export default Summary;
