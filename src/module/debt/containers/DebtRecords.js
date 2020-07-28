import { connect } from 'react-redux';
import Records from '../components/Records';
import { updateCell, removeCol } from '../../../store/debt/action';

const mapStateToProps = (state) => ({
  debtRecords: state.debts
});

const mapDispatchToProps = (dispatch) => ({
  doUpdateCell: (col, cell) => dispatch(updateCell(col, cell)),
  doRemoveCol: (col) => dispatch(removeCol(col))
});

export default connect(mapStateToProps, mapDispatchToProps)(Records);
