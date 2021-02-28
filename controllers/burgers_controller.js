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
    res.redirect("/")
})

router.post('/api/burger', async function (req, res) {
    let burgerName = req.body
    const insertBurger = await orm.insertOne(burgerName)
    res.redirect("/")

})

router.post('/api/burger/:id', async function (req, res) {
    const id = req.params.id
    const updateBurger = await orm.updateOne(id)
    res.redirect("/")

})

module.exports = router;