require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

// Database Connection
async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL)
}
main()
.then(() => console.log('DB is Connected...👍'))
.catch(err => console.log(err.message));

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});