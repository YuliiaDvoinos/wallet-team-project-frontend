const convertor = array =>
  array
    .map(({ _id, type, date, money, category, comment, prevBalance }) => {
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

      //category
      // let newCategory;
      // if (category.name === 'car') {
      //   newCategory = 'Машина';
      // }
      const parsedMoney = parseFloat(money);

      const obj = {
        _id,
        date: newDate,
        type: convertedType,
        money: parsedMoney,
        category,
        comment,
        balance: prevBalance,
      };
      return obj;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

export default convertor;
