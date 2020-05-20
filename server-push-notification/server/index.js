const express = require('express');
const bodyParser = require('body-parser');
const Logger = require('logger-nodejs');
const log = new Logger();
const jsonParser = bodyParser.json({ type: 'application/json' });
const urlencodedParser = bodyParser.urlencoded({ limit: '50mb', extended: true });
const Port = 8080;
const app = express();
const notification = require('../router/notification');
const server = require('http').createServer(app);


app.use(jsonParser);
app.use(urlencodedParser);
app.use('/api/notification', notification);
const start = async () => {
    try {

        server.listen(process.env.PORT || Port, () => {
            log.info(`Server is running on port: ${Port}`);
        });
        log.info(`App is listening(HTTPS) on port ${Port}`);
    } catch (error) {
        log.error(error);
        process.kill(process.pid, 'SIGTERM');
    }
};
start();