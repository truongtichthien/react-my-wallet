import React from 'react';
import { connect } from 'react-redux';
import { loadDebts } from '../../../store/debt/action';

const ButtonReload = (props) => <button onClick={props.doOnClick}>Reload Record</button>;

const mapDispatchToProps = (dispatch) => ({
  doOnClick: () => dispatch(loadDebts())
});

export default connect(null, mapDispatchToProps)(ButtonReload);
