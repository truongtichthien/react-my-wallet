import { connect } from 'react-redux';
import SummaryCol from '../components/SummaryCol';

const mapStateToProps = (state, props) => {
  // console.log('state', state);
  return {
    records: state.records
  }
};

export default connect(mapStateToProps)(SummaryCol);
