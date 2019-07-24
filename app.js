require('dotenv').config();

const express = require('express');

const userRouter = require('./routes/user.routes');
const carRouter = require('./routes/car.routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('api/', userRouter);
app.use('api/', carRouter);

app.listen(PORT, () => {
  console.log(`Webserver started on port ${PORT}`);
});
