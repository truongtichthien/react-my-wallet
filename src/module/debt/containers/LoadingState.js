import React from 'react';
import { connect } from 'react-redux';

const LoadingState = (props) => (
  <span>{props.loading ? 'loading...' : ''}</span>
)

const mapStateToProps = (state) => ({
  loading: state.loading
});

export default connect(mapStateToProps)(LoadingState);
