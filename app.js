const express = require('express');
const expressLayouts = require('express-ejs-layouts');

var app = express();

app.use(expressLayouts);
app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');

/*
 *	Home route
 */
app.get('/', function(req, res) {
    res.redirect('/about');
});

/*
 * About route
 */
app.get('/about', function(req, res) {
    var _tabs = [
        { name: 'About', active: true }, 
        { name: 'Director', active: false }
    ];

    res.render('pages/about.ejs', { tabs: _tabs});
});

/*
 * Director route
 */
app.get('/director', function(req, res) {
	var _tabs = [
        { name: 'About', active: false }, 
        { name: 'Director', active: true }
    ];

    res.render('pages/director.ejs', { tabs: _tabs});
});

app.listen(3000, () => console.log('Server running'));