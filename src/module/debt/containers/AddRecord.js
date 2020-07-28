import React from 'react';
import { names } from '../../../constants/Constants'
import { connect } from 'react-redux';
import { addPayment } from '../../../store/debt/action';

const ButtonAdd = (props) => <button onClick={props.doOnClick}>Add New Record</button>;

const mapDispatchToProps = (dispatch) => ({
  doOnClick: () => dispatch(addPayment(names))
});

export default connect(null, mapDispatchToProps)(ButtonAdd);
