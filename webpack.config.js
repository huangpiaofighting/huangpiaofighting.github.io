const HtmlWebpackPlugin = require('html-webpack-plugin'); //加载HTML
const CleanWebpackPlugin = require('clean-webpack-plugin');//清空文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");//加载css
var path = require('path');
module.exports = {
	entry: {
		"index": __dirname + "/src/index.js",
		"main_test": __dirname + "/src/main.js"
	},
	devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项   source-map eval-source-map
	module: {
		rules: [
		{
			test: /\.(css)$/,
			exclude: /^node_modules$/, //加载css
			use: ExtractTextPlugin.extract({
				use: [{
					loader: 'css-loader',
					options: {
						modules: true,//css modules 
						importLoaders: 1,
						localIdentName: '[path][local]_[hash:base64:5]',
						sourceMap: true
					},
				}],
				fallback: 'style-loader'
			})
		},{
            test: /\.(js|jsx)$/,
            exclude: /^node_modules$/,
			loader: "babel-loader",
			options: {
				presets: ["es2015","react"]//jsx 必须加上react参数 否则jsx编译不通过
			}
        },{
			test: /\.(png|svg|jpg|gif)$/, //加载图片
			exclude: /^node_modules$/,
			use: ['file-loader']
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/, //加载字体
			exclude: /^node_modules$/,
			use: [
				'file-loader'
			]
		}]
	},
	plugins: [
		// new CleanWebpackPlugin(["dist"]),
		new ExtractTextPlugin("styles.css"),
		new HtmlWebpackPlugin({
			filename: "root.html",
			template: "./root.html",
			inject: true
		})
	],
	output: {
		path: __dirname + "/dist",
		publicPath: "./",
		filename: "[name].js" //打包后输出文件的文件名
	},
	watch:true,
	devServer: {//配置服务器
		contentBase: path.join(__dirname, "/dist"),
		compress: true,
		host:"localhost",
		hot:true,
		inline:true,
		open:true,//打开浏览器
		openPage:'hello.html',
		watchContentBase: true,
		port: 9000
	}
}