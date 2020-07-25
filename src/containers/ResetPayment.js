import React from 'react';
import { connect } from 'react-redux';
import CommonButton from '../components/CommonButton';
import { resetPayment } from '../actions';

const ButtonReset = (props) => <CommonButton title='Reset' doOnClick={props.doOnClick}/>;

const mapDispatchToProps = (dispatch) => ({
  doOnClick: () => dispatch(resetPayment())
});

export default connect(null, mapDispatchToProps)(ButtonReset);
