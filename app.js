require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const userRouter = require('./routes/user.routes');
const carRouter = require('./routes/car.routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use('api/', userRouter);
app.use('api/', carRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;
  res.status(status).json({
    error: {
      message: error.message
    }
  });
});

app.listen(PORT, () => {
  console.log(`Webserver started on port ${PORT}`);
});
