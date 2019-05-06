var express = require('express'),
	cors = require('cors'),
	helmet = require('helmet'),
    expressLayouts = require('express-ejs-layouts');

var app = express();

var isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(helmet());
app.use(expressLayouts);
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');

var tabs = tab => [{ name: 'Latest', active: (tab == 'Latest') }, { name: 'About', active: (tab == 'About') }, { name: 'Actor', active: (tab == 'Actor') }, { name: 'Director', active: (tab == 'Director') }];

app.get('/', (req, res) => res.redirect('/about'));
app.get('/latest', (req, res) => res.render('pages/latest.ejs', { tabs: tabs('Latest') }));
app.get('/about', (req, res) => res.render('pages/about.ejs', { tabs: tabs('About') }));
app.get('/director', (req, res) => res.render('pages/director.ejs', { tabs: tabs('Director') }));
app.get('/actor', (req, res) => res.render('pages/actor.ejs', { tabs: tabs('Actor') }));
app.get('/contact', (req, res) => res.render('pages/contact.ejs', { tabs: tabs() }));
app.use((req, res) => res.status(404).render('Error'));

var server = app.listen(process.env.PORT || 3000, () => console.log('Listening on port ' + server.address().port));