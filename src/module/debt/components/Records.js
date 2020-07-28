import React from 'react';
import PropTypes from 'prop-types'
import Cell from './Cell_InClass';
import '../styles/Records.css';

const Records = (props) => (
  <div className="main-panel">
    <div className="table-container">
      {props.debtRecords.map(col => (
        <div key={col.date} className="col">
          <div className="col-label">
            <span>Paid</span><span>Owed</span>
          </div>
          {col.debt.map(row => (
            <Cell key={row.person + '-' + col.date}
                  pay={row.pay}
                  owe={row.owe}
                  person={row.person}
                  doUpdate={(cell) => props.doUpdateCell(col, cell)} />
          ))}
          <button className="" onClick={() => props.doRemoveCol(col)}>Remove</button>
        </div>
      ))}
    </div>
  </div>
);

Records.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      debt: PropTypes.arrayOf(
        PropTypes.shape({
          person: PropTypes.string.isRequired,
          pay: PropTypes.number.isRequired,
          owe: PropTypes.number.isRequired,
        })
      ).isRequired
    }).isRequired
  ),
  doUpdateCell: PropTypes.func.isRequired
}

export default Records;
