const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB connection successful'))
	.catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(8800, () => {
	console.log('BackEnd server is running');
});