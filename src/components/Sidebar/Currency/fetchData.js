import axios from "axios";
const URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export async function fetchData() {
  try {
    return await axios.get(URL)
  } catch(err) {
    return err
  } 
}