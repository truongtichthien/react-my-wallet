import { actions } from '../../constants/Constants'

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

export { addPayment, resetPayment, updateCell, removeCol };
