const http = require('http');

const PORT = process.env.PORT || 3000;
const TIMEOUT = process.env.TIMEOUT || 5000;
const DELAY = process.env.DELAY || 1000;

console.log('Запуск сервера');
const server = http.createServer().listen(PORT);


server.on('request', (request, response) => {
    if (request.url === '/') {
        console.log('Запрос');
        let timerId = setInterval(() => {
            let date = new Date().toUTCString();  // .toISOString()
            response.write(date + '\n');
            console.log(date);
        }, DELAY);
        
        setTimeout(() => {
            clearTimeout(timerId);
            response.end();
            console.log('Конец');
            // process.exit(0);
        }, TIMEOUT);
    }
});
