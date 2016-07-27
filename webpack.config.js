var path = require('path')
var getConfig = require('hjs-webpack')
var fs = require('fs')

var config = getConfig({
	in: 'src/app.js',
	out: 'dist',
	clearBeforeBuild: '!(images|css|favicon.ico)',
	isDev: process.env.NODE_ENV !== 'production',
	output: {
		hash: true
	},
	urlLoaderLimit: 10000,
	html: function(context){
		return {
			'index.html': context.defaultTemplate(),
		}
	}
})

config.resolve = Object.assign({}, config.resolve, {
	root: [
		path.resolve('./node_modules'),
		path.resolve('./src')
	]
})

config.module.loaders = config.module.loaders.map(l => {
	if (!!l && l.loader && l.loader.indexOf('babel-loader') > -1){
		delete l.exclude
		l.include = [path.resolve('./src'), path.resolve('./node_modules/react-pure.css')]
	}
	return l
})

RegExp.prototype.toJSON = RegExp.prototype.toString;

fs.writeFile('./webpack.config.result.json', JSON.stringify(config, null, 2), err => {
	if (err) return console.log(err)
})

module.exports = config;
