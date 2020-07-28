import { connect } from 'react-redux';
import Summary from '../components/Summary';

const mapStateToProps = (state) => ({
  debtRecords: state.debts
});

export default connect(mapStateToProps)(Summary);
