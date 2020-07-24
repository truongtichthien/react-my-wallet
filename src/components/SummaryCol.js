import React from 'react';
import { names } from '../constants/Constants';
import '../styles/FixedPanel.css';

const SummaryCol = (props) => {
  let total = [];
  return (
    <div className="paid-panel">
      <div className="span"><span>Must Pay</span></div>
      {
        names.map((n, idx) => {
          let totalOwe = props.records.map((day) => day.record[idx].owe);
          total[idx] = totalOwe.reduce((a, b) => (a + b), 0);
          return (<div className="people" key={n}>{ total[idx] || 0 }</div>)
        })
      }
    </div>
  )
};

export default SummaryCol;
