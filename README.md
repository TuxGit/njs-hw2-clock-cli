# clock-cli
Http сервер, который при входе на порт сервера инициирует запуск вывода времени с заданным интервалом (клиенту и в лог сервера)

Node js

## Запуск
Пример использования
```
OS Linux:
TIMEOUT=10000 DELAY=2000 node server.js

OS Windows задать параметры в package.json (по умолчанию TIMEOUT 10сек, DELAY 2сек) и запустить:
npm start
```
