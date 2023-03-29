const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/my-app')
.then(() => console.log('connected...'))
.catch(err => console.error('not connected', err));
