const convertor = array =>
  array.map(({ _id, type, date, money, category, comment }) => {
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

    const obj = {
      _id,
      date: newDate,
      type: convertedType,
      money,
      category,
      comment,
    };
    return obj;
  });

export default convertor;
