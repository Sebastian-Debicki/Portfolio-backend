const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection succesfull!'));

const PORT = process.env.PORT || 8000;
const ADDRESS = '127.0.0.1';

app.listen(PORT, () => {
  console.log(`App listening on port http://${ADDRESS}:${PORT}`);
});
