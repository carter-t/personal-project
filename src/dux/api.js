import axios from 'axios';
const data = require('./data.js');

export const getData = () => {
  return axios.get(data.connection)
    .then(res => {
      let target = res.data.targetValue;
      console.log(target);
      return target;
    });
}

getData();