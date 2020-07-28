import { actions } from '../../constants/Constants';

const handleAddDebt = (records = [], action) => {
  const newDebt = action.people.map((name) => ({
    person: name,
    pay: 0,
    owe: 0
  }));

  return [...records, {
    date: new Date().getTime(),
    debt: newDebt
  }];
};

const handleResetDebt = (records = [], action) => []

const handleUpdateDebt = (records = [], action) => {
  const amountOfPeople = records[0].debt.length;
  let totalPayPerDebt = 0;
  // update pay at cell
  return [...records].map((record) => {
    if (record.date === action.date) {
      record.debt.forEach((row) => {
        if (row.person === action.person) {
          row.pay = +action.pay;
        }
        // calc total pay
        totalPayPerDebt += +row.pay;
      });
      // update owe
      record.debt.forEach((row) => {
        row.owe = (totalPayPerDebt/amountOfPeople) - +row.pay;
      })
    }
    return record;
  });
}

const hanldeRemoveDebt = (records = [], action) => {
  return [...records].filter((rc) => rc.date !== action.date);
}

const reducerMapping = {
  [actions.addDebt]: handleAddDebt,
  [actions.resetDebt]: handleResetDebt,
  [actions.updateDebt]: handleUpdateDebt,
  [actions.removeDebt]: hanldeRemoveDebt
}

const reducer = (records = [], action) => {
  if (!reducerMapping[action.type]) {
    return records;
  }
  return reducerMapping[action.type](records, action);
};

export default reducer;
