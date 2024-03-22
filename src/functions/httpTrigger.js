const { app } = require('@azure/functions');


// const express = require('express');
const bcrypt = require('bcryptjs')
const http = require('http');
var bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// const app1 = express();
// const router = express.Router();

// app1.use(express.json());
// app1.use(bodyParser.json());
// app1.use(cookieParser());
const mongoose = require("mongoose");
const { ObjectId, Db } = require('mongodb');
const Data = require("./Model/model");
// const req = require('express/lib/request');
const { resolve } = require('path');
// const res = require('express/lib/response');

const jwt = require("jsonwebtoken");
require('./database/connection');

const auth = require('./middleware/auth')

const data = require('./Model/model')

// const { route } = require('express/lib/application');

const { createUsers } = require('./controllers/userdata');

// updated
app.http('httpTrigger', {
    route:"/details",
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: createUsers
});
// updated

// app.route('/').post(createUsers)
// app.route('/:id').patch(updateData).delete(deleteData).get(findData)
// app.route('/login', auth).post(loginDetails)

// /**************server Started*******************/
app.listen(process.env.PORT, () => {
    console.log("Server started")

})