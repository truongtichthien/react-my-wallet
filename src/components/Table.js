import React from 'react'
// import PropTypes from 'prop-types'
import Cell from './Cell'

const Table = (props) => {
  // console.log('props', props)
  return (
    <div className="table-container">
      {props.records.map(col => (
        <div key={col.date} className="col">
          <div className="col-label">
            <span>Pay</span><span>Owe</span>
          </div>
          {col.record.map(c => (
            <Cell key={c.person + '-' + col.date} {...c} update={(cell) => props.doUpdateCell(col, cell)} />
          ))}
          <button className="" onClick={() => props.doRemoveCol(col)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

// Table.propTypes = {
//   people: PropTypes.arrayOf(
//     PropTypes.string.isRequired
//   ).isRequired,
//   cells: PropTypes.arrayOf(
//     PropTypes.arrayOf(
//       PropTypes.shape({
//         person: PropTypes.string.isRequired,
//         date: PropTypes.number.isRequired,
//         pay: PropTypes.number.isRequired,
//         owe: PropTypes.number.isRequired,
//       }).isRequired
//     ).isRequired
//   ).isRequired,
//   updateCell: PropTypes.func.isRequired
// }

export default Table
