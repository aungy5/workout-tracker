const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const logger = require("morgan");

const PORT = process.env.port || 3001;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(express.static('public'))

// app.use('/', require('./routes/htmlRoutes'))
// app.use('/api', require('./routes/apiRoutes'))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDB", {
  useNewUrlParser: true,
  //useFindAndModify: false
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
