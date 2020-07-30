import { combineReducers } from 'redux';
import debts from './debt/reducer';
import loading from './loading/reducer';

export default combineReducers({
  debts,
  loading
})
