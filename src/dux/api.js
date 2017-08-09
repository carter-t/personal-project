import axios from 'axios';

export const getRequest = () => {
  return axios.get('http://www...url')
    .then(res => {
      let target = res.data.targetValue;
      return target;
    });
}