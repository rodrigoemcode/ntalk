var express = require('express')
  , load = require('express-load')
  // , routes = require('./routes');
  , app = express();

// ...stack de configurações do servidor...

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);
app.get('/about', routes.unsubscribe.index);

load('models')
    .then('controllers')
    .then('routes')
    .into(app);

// ...app.listen(3000)...

app.listen(3000, function () {
  console.log("Ntalk no ar.");
});

