	var express = require('express'),
	    fs = require('fs'),
	    path = require('path'),
	    morgan = require('morgan'),
		app = express(),
		basePath = process.cwd(),
		pathToMobile = path.join(basePath, 'mobile'),
		pathToDesktop = path.join(basePath, 'desktop');

	app
	    .disable('x-powered-by')
	    .use(morgan('dev'));
	app .use('/', express.static(basePath));


app.listen(1111);	
