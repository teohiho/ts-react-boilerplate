const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 5000;

app.get('*.css', function(req, res, next) {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/css');
	next();
});

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	next();
});


app.use( express.static( `${__dirname}/../build` ) );

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, '0.0.0.0',
	() => {
		console.log(`Example app listening on port ${port}!`)
		console.log(`http://localhost:${port}`);
	}
)