const express = require('express')  
const exphbs = require('express-handlebars');

const app = express()
const PORT = process.env.PORT || 8080;

// for POSTING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for HANDLEBARS paths
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.use(express.static(__dirname));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller')
app.use('/', router)

app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
)