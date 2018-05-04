const express = require('express');
const mongoose = require('mongoose');


const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();


const db = require('./config/keys').mongoURI;

// Connect to MongoDb

mongoose
    .connect(db)
    .then(() => {console.log('mongoDb connected')})
    .catch(err => console.log('mongoDb error'));


app.get('/', (req, res) => res.send('hello world'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

