import React from 'react';
import PropTypes from 'prop-types';

class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      payValue: this.props.pay || ''
    }
  };

  onChangeFunc = (event) => {
    let val = event.target.value.match(/^\d+$/) ? +event.target.value : ''
    this.setState({payValue: val}, () => {
      // https://stackoverflow.com/questions/30782948/why-calling-react-setstate-method-doesnt-mutate-the-state-immediately
      // use a callback function
      this.props.doUpdate({
        person: this.props.person,
        pay: this.state.payValue
      })
    })
  };

  render () {
    return (
      <div className="cell">
        <div className="cell-partion pay">
          <input type="text" className="input" value={this.state.payValue} onChange={this.onChangeFunc}/>
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
