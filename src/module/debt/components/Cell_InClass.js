import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {
  onChangeFunc = (event) => {
    const { person, doUpdate } = this.props
    const pay = event.target.value.match(/^\d+$/) ? +event.target.value : '';
    doUpdate({ person, pay })
  };

  render () {
    return (
      <div className="cell">
        <div className="cell-partion pay">
          <input type="text" className="input" value={this.props.pay || ''} onChange={this.onChangeFunc}/>
        </div>
        <div className="cell-partion owe">{this.props.owe}</div>
      </div>
    )
  };
}

Cell.propTypes = {
  person: PropTypes.string.isRequired,
  pay: PropTypes.number.isRequired,
  owe: PropTypes.number.isRequired
};

export default Cell;
