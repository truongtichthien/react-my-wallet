const records = (cells = [], action) => {
  switch (action.type) {
    case 'ADD_PAYMENT':
      let record = action.people.map((name) => ({
        person: name,
        pay: 0,
        owe: 0
      }));

      return [...cells, {
        date: new Date().getTime(),
        record
      }];

    case 'RESET_PAYMENT':
      return [];

    case 'UPDATE_CELL':
      let totalPerCol = 0;
      let peopleAmount = cells[0].record.length;
      // update pay at cell
      return [...cells].map((c) => {
        if (c.date === action.date) {
          c.record.forEach((rc) => {
            if (rc.person === action.person) {
              rc.pay = +action.pay;
            }
            // calc total pay
            totalPerCol += +rc.pay;
          });
          // update owe
          c.record.forEach((rc) => {
            rc.owe = (totalPerCol/peopleAmount) - +rc.pay;
          })
        }
        return c;
      });

    case 'REMOVE_COL':
      return [...cells].filter((r) => r.date !== action.date);

    default:
      return cells;
  }
};

export default records;
