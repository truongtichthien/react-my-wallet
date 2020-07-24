import { connect } from 'react-redux'
import ButtonReset from '../components/ButtonReset'
import { resetPayment } from '../actions'

const mapDispatchToProps = (dispatch) => ({
  doOnClick: () => dispatch(resetPayment())
})

export default connect(null, mapDispatchToProps)(ButtonReset)
