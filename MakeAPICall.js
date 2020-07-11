const http = require('https');
const { Http2ServerRequest } = require('http2');

http.get('https://jsonplaceholder.typicode.com/todos/1', (res) => {
    console.log(res);
}).on('error', (err) => {
    console.log(error);
});
