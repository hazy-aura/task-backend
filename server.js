const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const boardRoutes = require('./routes/board');
const taskRoutes = require('./routes/task');

const app = express();
const PORT = process.env.PORT || 8002;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: '*',
}));

app.use('/api', boardRoutes);
app.use('/api', taskRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
 console.log('Connected to MongoDB');
}).catch(err => {console.log(err)});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
