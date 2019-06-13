const express = require('express');
// const cors = require('cors');
// const helmet = require('helmet');
const http = require('http');
const reload = require('reload');
const expressLayouts = require('express-ejs-layouts');

const app = express();
// const isProduction = process.env.NODE_ENV === 'production';

// app.use(cors());
// app.use(helmet());
app.use(expressLayouts);
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');

const tabs = tab => [{ name: 'Latest', active: (tab == 'Latest') }, { name: 'About', active: (tab == 'About') }, { name: 'Actor', active: (tab == 'Actor') }, { name: 'Director', active: (tab == 'Director') }];

app.get('/', (req, res) => res.redirect('/about'));
app.get('/latest', (req, res) => res.render('pages/latest.ejs', { tabs: tabs('Latest') }));
app.get('/about', (req, res) => res.render('pages/about.ejs', { tabs: tabs('About') }));
app.get('/director', (req, res) => res.render('pages/director.ejs', { tabs: tabs('Director') }));
app.get('/actor', (req, res) => res.render('pages/actor.ejs', { tabs: tabs('Actor') }));
app.get('/contact', (req, res) => res.render('pages/contact.ejs', { tabs: tabs() }));

const server = http.createServer(app);
server.listen(process.env.PORT || 3000, () => console.log('Listening on port ' + server.address().port));
reload(app);