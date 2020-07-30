import { actions } from '../../constants/Constants';

const loadDebts = () => ({
  type: actions.loadDebts
});

const loadDebtsSuccess = (debts) => ({
  type: actions.loadDebtsSuccess,
  debts
});

const loadDebtsError = (debts) => ({
  type: actions.loadDebtsError,
  debts
});

const addPayment = (people) => ({
  type: actions.addDebt,
  people
});

const resetPayment = () => ({
  type: actions.resetDebt
});

const updateCell = (col, cell) => ({
  type: actions.updateDebt,
  date: col.date,
  person: cell.person,
  pay: cell.pay,
  owe: cell.owe
});

const removeCol = (col) => ({
  type: actions.removeDebt,
  date: col.date
});

export {
  loadDebts,
  loadDebtsSuccess,
  loadDebtsError,
  addPayment,
  resetPayment,
  updateCell,
  removeCol
};
