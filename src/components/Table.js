import React from 'react';
import PropTypes from 'prop-types'
import Cell from './Cell_InHook';

const Table = (props) => (
  <div className="table-container">
    {props.records.map(col => (
      <div key={col.date} className="col">
        <div className="col-label">
          <span>Paid</span><span>Owed</span>
        </div>
        {col.record.map(c => (
          <Cell key={c.person + '-' + col.date} {...c} doUpdate={(cell) => props.doUpdateCell(col, cell)} />
        ))}
        <button className="" onClick={() => props.doRemoveCol(col)}>Remove</button>
      </div>
    ))}
  </div>
);

Table.propTypes = {
  records: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      record: PropTypes.arrayOf(
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

export default Table;
