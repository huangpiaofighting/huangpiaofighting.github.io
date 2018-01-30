var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require('path');

var server = new WebpackDevServer(webpack(config), {
	contentBase: path.join(__dirname, "/dist"),
	compress: true,
	host:"localhost",
	hot:true,
	inline:true,
	open:true,//打开浏览器
	openPage:'hello.html',
	watchContentBase: true,
	port: 9000
});

server.listen(9001, function() {
	console.log('正常打开9001端口')
});