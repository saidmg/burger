const express = require('express')  

const exphbs = require('express-handlebars');
const orm = require('./config/orm');

const app = express()
const PORT = process.env.PORT || 8080;

// for POSTING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for HANDLEBARS paths
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', async function(req, res){
    const burgers = await orm.selectAll()
    // console.log('[/ GET] burgers:', burgers);

    // return it within handlebars
    res.render('index', { tasks: burgers });
})

app.get('/', async function(req, res){
    const result = await orm.updateOne()
    console.log('[/ PUT] updateBurger:', updateBurger);
    res.send(result)
})

app.post('/api/burger', async function(req, res){
    let burgerName = req.body 
    console.log(burgerName)
    const insertBurger = await orm.insertOne(burgerName)
    console.log('[/ POST] insertBurger:', insertBurger);
})

app.post('/api/burger/:id', async function(req, res){
    const id =  req.params.id 
    console.log(id)
    const updateBurger = await orm.updateOne(id)
    console.log('[/ PUT] updateBurger:', updateBurger);
})
// app.post('/', async function(req, res){
//   console.log( `[/ POST] Data received:`, req.body )

  
//   const result = await db.query( 'INSERT INTO tasks (task) VALUES (?)', [req.body.task] )
//   // trigger page reload
//   res.redirect('/');
// })

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
)