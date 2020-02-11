const dbConfig = require('./knexfile');
const db = require('knex')(dbConfig[process.env.NODE_ENV] ? dbConfig[process.env.NODE_ENV] : dbConfig['development']);
const express = require('express');

var app = express();

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Server is up and running')
})

app.post('/', async (req, res) => {
    try {

        var data = {
            _formName: req.headers['form_name'],
            jsonData: JSON.stringify(req.body[0])
        }
        var _x = await db('koboResponse').insert({
            _formName: data._formName,
            jsonData: data.jsonData
        }).returning('id');

        res.json(_X);
    } catch (error) {
        // console.log(error)
        res.status(500)
        res.json({
            err: 'We encountered and system error, please contact system administrator and advise the error'
        })
    }
})

app.listen(3000)