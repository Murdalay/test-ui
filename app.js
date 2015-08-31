	var express = require('express'),
	    fs = require('fs'),
	    path = require('path'),
	    morgan = require('morgan'),
		app = express(),
		basePath = process.cwd(),
		pathToMobile = path.join(basePath, 'mobile'),
		pathToStatic = path.join(basePath, 'static'),
		pathToDesktop = path.join(basePath, 'desktop');

	app
	    .disable('x-powered-by')
	    .use(morgan('dev'));
	app .use('/', express.static(basePath))
		.use('/desktop/', express.static(pathToDesktop))
		.use('/mobile/', express.static(pathToDesktop))
		.use('/static/', express.static(pathToStatic));


app.listen(1111);	
