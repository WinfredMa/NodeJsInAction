var connect = require('connect');

function logger(req, res, next) {
    console.log('%s %s', req.method, req.url);
    next();
}

function hello(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello');
}
var app = connect();
app.use(logger);
app.use('/admin', hello);
app.listen(4000);

