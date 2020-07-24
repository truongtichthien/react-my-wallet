import { connect } from 'react-redux';
import Table from '../components/Table';
import { updateCell, removeCol } from '../actions';

const mapStateToProps = (state, props) => {
  // console.log('state', state);
  return {
    records: state.records
  }
};

const mapDispatchToProps = dispatch => ({
  doUpdateCell: (col, cell) => dispatch(updateCell(col, cell)),
  doRemoveCol: (col) => dispatch(removeCol(col))
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
