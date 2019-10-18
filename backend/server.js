const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(cors());
app.use(express.json());
 
const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

connection.once('open', () => console.log("MongoDB database connection established successfully"));

const userRoutes = require('./routes/user');

app.use('/user', userRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));