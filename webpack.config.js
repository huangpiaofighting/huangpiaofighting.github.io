const HtmlWebpackPlugin = require('html-webpack-plugin'); // 加载HTML
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清空文件
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 加载css
const path = require('path')
const glob = require('glob')

const webpackConfig = {
  /* 一些webpack基础配置 */
  entry: {},
  devtool: 'eval-source-map', // 配置生成Source Maps，选择合适的选项   source-map eval-source-map
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /^node_modules$/, // 加载css
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // 在开发环境使用 style-loader
          use: 'css-loader'
        })
      }, {
        test: /\.(js|jsx)$/,
        exclude: /^node_modules$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'] // jsx 必须加上react参数 否则jsx编译不通过
        }
      }, {
        test: /\.(png|svg|jpg|gif)$/, // 加载图片
        exclude: /^node_modules$/,
        use: ['file-loader']
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // 加载字体
        exclude: /^node_modules$/,
        use: [
          'file-loader'
        ]
      }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'])

  ],
  output: {
    path: __dirname + '/dist/',
    publicPath: './../',
    filename: 'js/[name].js' // 打包后输出文件的文件名
  },
  watch: true,
  devServer: { // 配置服务器
    contentBase: path.join(__dirname, '/dist'),
    compress: true,
    host: 'localhost',
    hot: true,
    inline: true,
    open: true, // 打开浏览器
    openPage: 'hello.html',
    watchContentBase: true,
    port: 9000
  }
}
// 获取指定路径下的入口文件
function getEntries (globPath) {
  var files = glob.sync(globPath),
    entries = {}
  files.forEach(function (filepath) {
    // 取倒数第二层(view下面的文件夹)做包名
    var split = filepath.split('/')
    var name = split[split.length - 2]
    entries[name] = './' + filepath
  })
  return entries
}

var entries = getEntries('src/template/**/index.js')
Object.keys(entries).forEach(function (name) {
  // 每个页面生成一个entry，如果需要HotUpdate，在这里修改entry
  // console.log("entries[name]"+entries[name])
  webpackConfig.entry[name] = entries[name]
  // 每个页面生成一个html
  var plugin = new HtmlWebpackPlugin({
    // 生成出来的html文件名
    filename: './html/' + name + '.html',
    // 每个html的模版，这里多个页面使用同一个模版
    template: './src/html/' + name + '.html',
    // 自动将引用插入html
    inject: true,
    // 每个html引用的js模块，也可以在这里加上vendor等公用模块
    chunks: [name]
  })
  webpackConfig.plugins.push(plugin)
})
let cssplugin = new ExtractTextPlugin({
  filename: 'css/[name].css',
  allChunks: false
})
webpackConfig.plugins.push(cssplugin)
module.exports = webpackConfig
