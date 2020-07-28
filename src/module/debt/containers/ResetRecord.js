import React from 'react';
import { connect } from 'react-redux';
import { resetPayment } from '../../../store/debt/action';

const ButtonReset = (props) => <button onClick={props.doOnClick}>Remove All Records</button>;

const mapDispatchToProps = (dispatch) => ({
  doOnClick: () => dispatch(resetPayment())
});

export default connect(null, mapDispatchToProps)(ButtonReset);
