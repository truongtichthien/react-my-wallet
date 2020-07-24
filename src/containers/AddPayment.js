import { connect } from 'react-redux'
import ButtonAdd from '../components/ButtonAdd'
import { addPayment } from '../actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  doOnClick: () => dispatch(addPayment(ownProps.people))
})

export default connect(null, mapDispatchToProps)(ButtonAdd)
