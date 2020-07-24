const addPayment = (people) => ({
  type: 'ADD_PAYMENT',
  people
});

const resetPayment = () => ({
  type: 'RESET_PAYMENT'
});

const updateCell = (col, cell) => {
  // console.log(col, cell)
  return {
    type: 'UPDATE_CELL',
    date: col.date,
    person: cell.person,
    pay: cell.pay,
    owe: cell.owe
  }
};

const removeCol = (col) => ({
  type: 'REMOVE_COL',
  date: col.date
});

const sumOwe = (col) => ({
  type: 'SUM_OWE',
  date: col.date
});

export { addPayment, resetPayment, updateCell, removeCol, sumOwe }
