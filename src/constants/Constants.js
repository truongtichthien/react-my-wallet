const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const names = ['Trung', 'Nam', 'Hao', 'Thao', 'Duy', 'Bon', 'Nhi ♥']
const actions = {
  addDebt: 'ADD_DEBT',
  updateDebt: 'UPDATE_DEBT',
  removeDebt: 'REMOVE_DEBT',
  resetDebt: 'RESET_DEBT',

  loadDebts: 'LOAD_DEBTS',
  loadDebtsSuccess: 'LOAD_DEBTS_SUCCESS',
  loadDebtsError: 'LOAD_DEBTS_ERROR',

  onLoading: 'ON_LOADING',
  offLoading: 'OFF_LOADING',
}

export { days, names, actions }
