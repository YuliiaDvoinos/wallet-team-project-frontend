const convertor = array =>
  array
    .map(({ _id, type, date, money, category, comment, balance }) => {
      //type
      let convertedType;
      if (type === 'income') {
        convertedType = '+';
      } else {
        convertedType = '-';
      }

      //date
      const arr = [...date];
      arr.splice(6, 2);
      const newDate = arr.join('');

      const obj = {
        _id,
        date: newDate,
        type: convertedType,
        money,
        category,
        comment,
        balance,
      };
      return obj;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

export default convertor;
