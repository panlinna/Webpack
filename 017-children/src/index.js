import axios from 'axios';

//1.axios.get('https://api.github.com/')
//  .then(function (response) {
//    console.log(response);
//  })
//  .catch(function (error) {
//    console.log(error);
//  });
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
