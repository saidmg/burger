var express = require('express');
var router = express.Router()
const orm = require("../config/orm");



router.get('/', async function (req, res) {
    const burgers = await orm.selectAll()

    // return it within handlebars
    res.render('index', { tasks: burgers });
})

router.get('/', async function (req, res) {
    const result = await orm.updateOne()
    console.log('[/ PUT] updateBurger:', updateBurger);
    res.send(result)
})

router.post('/api/burger', async function (req, res) {
    let burgerName = req.body
    console.log(burgerName)
    const insertBurger = await orm.insertOne(burgerName)
    console.log('[/ POST] insertBurger:', insertBurger);
})

router.post('/api/burger/:id', async function (req, res) {
    const id = req.params.id
    console.log(id)
    const updateBurger = await orm.updateOne(id)
    console.log('[/ PUT] updateBurger:', updateBurger);
})

module.exports = router;