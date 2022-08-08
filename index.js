const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const signUprouter = require('./routes/signUp.js');
const signInrouter = require('./routes/signIn.js');
const mongoose = require('mongoose');


dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

const connect = () => {
    mongoose.connect(process.env.MONGO)
.then(() =>{
    console.log('connected to database');
}).catch((err) => {
   console.log(err);
})

}



app.use('/api/signUp',signUprouter);
app.use('/api/signIn',signInrouter);

app.listen(process.env.PORT  || 3015);
connect();