require('dotenv').config({ path: './.env' });
const express = require('express');
const serverConfig = require('./serverConfig');
const server = express();
const db = require('./db/models/index')
const registrationRouter = require('./routes/RegistrationRout')
const companiesRouter = require('./routes/companiesRouter');


serverConfig(server);


async function testConnection() {
    try {
    await db.sequelize.authenticate();
    console.log('БД подключена успешно');
    } catch (error) {
    console.log('Ошибка подключения к БД', error.message);
    }
    }
    testConnection()




server.use('/', registrationRouter)
server.use('/api', companiesRouter);


server.listen(process.env.PORT || 3000, () => {
  console.log('Server is working ');
});
