// using inbuilt http request
const http = require('https');
const axios = require('axios');

http.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
    console.log(res);
}).on('error', (err) => {
    console.log(error);
});

// using axios libray by installing axios npm package
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });
