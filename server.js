const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' });

let DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB).then(res => console.log('DB is connected'))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Successfuly Running on ' + port)
})