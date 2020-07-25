import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Cell = (props) => {
  const [payVal, setPayVal] = useState(props.pay || '');

  useEffect(() => {
    props.doUpdate({
      person: props.person,
      pay: payVal
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [payVal]);

  const onChangeFunc = (event) => {
    let val = event.target.value.match(/^\d+$/) ? +event.target.value : ''
    setPayVal(val);
  };

  return (
    <div className="cell">
      <div className="cell-partion pay">
        <input type="text" className="input" value={ payVal } onChange={ onChangeFunc }/>
      </div>
      <div className="cell-partion owe">{ props.owe }</div>
    </div>
  );
}

Cell.propTypes = {
  person: PropTypes.string.isRequired,
  pay: PropTypes.number.isRequired,
  owe: PropTypes.number.isRequired
};

export default Cell;
