const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./models/users')
require('./db/conn');

const port = process.env.PORT || 2000;

app.use(cors());
app.use(bodyParser.json());

app.post('/data', async (req, res) => {
    const usershere = new Users({
        username: req.body.username,
        message: req.body.message
    })
    const myusers = await usershere.save();
    res.status(201).send("data send");
    console.log(myusers);
    });

app.get('/data', async (req,res) => {
    const list = await Users.find({});
    res.json(list)
})

app.listen(port, () => {
    console.log("server is running");
});