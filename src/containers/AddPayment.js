import React from 'react';
import { connect } from 'react-redux';
import CommonButton from '../components/CommonButton';
import { addPayment } from '../actions';

const ButtonAdd = (props) => <CommonButton title='Add' doOnClick={props.doOnClick}/>;

const mapDispatchToProps = (dispatch, ownProps) => ({
  doOnClick: () => dispatch(addPayment(ownProps.people))
});

export default connect(null, mapDispatchToProps)(ButtonAdd);
