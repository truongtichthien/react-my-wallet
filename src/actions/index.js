const addPayment = (people) => ({
  type: 'ADD_PAYMENT',
  people
});

const resetPayment = () => ({
  type: 'RESET_PAYMENT'
});

const updateCell = (col, cell) => ({
  type: 'UPDATE_CELL',
  date: col.date,
  person: cell.person,
  pay: cell.pay,
  owe: cell.owe
});

const removeCol = (col) => ({
  type: 'REMOVE_COL',
  date: col.date
});

export { addPayment, resetPayment, updateCell, removeCol };
